// src/context/AuthContext.tsx
// Cryptographically verified client-side authentication and session management for CHARGE undo
// Enforces email validation, duplicate prevention, and salted SHA-256 password verification.

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, LoginCredentials, RegisterData } from '../types/auth';
import { isValidEmail, isValidPhone, isValidPassword } from '../utils/validation';

export interface StoredUserAccount extends User {
  passwordHash: string;
  salt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<{ success: boolean; error?: string }>;
  register: (data: RegisterData) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  becomeProvider: () => void;
  switchRole: (role: UserRole) => void;
}

const SESSION_STORAGE_KEY = 'charge_undo_session_v2';
const ACCOUNTS_STORAGE_KEY = 'charge_undo_accounts_v2';

/**
 * Computes a salted SHA-256 hash using the Web Crypto API.
 */
async function hashPassword(password: string, salt: string): Promise<string> {
  const enc = new TextEncoder();
  const data = enc.encode(`${salt}:${password}:chargeundo_secure_auth_v1`);
  const buffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(buffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Generates a cryptographically random 16-byte hex salt.
 */
function generateSalt(): string {
  const arr = new Uint8Array(16);
  crypto.getRandomValues(arr);
  return Array.from(arr).map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Pre-seeded verified administrative account
// Email: admin@chargeundo.in | Password: Admin@12345
const SEED_ACCOUNTS: StoredUserAccount[] = [
  {
    id: 'user-admin-01',
    name: 'Platform Administrator',
    email: 'admin@chargeundo.in',
    phone: '+91 98470 00001',
    primaryRole: 'admin',
    roles: ['ev_owner', 'provider', 'admin'],
    createdAt: '2025-11-10T09:00:00Z',
    isProvider: true,
    isAdmin: true,
    salt: 'chargeundo_adm_salt_2026',
    passwordHash: 'bf72903f14b6241ba34d773de050504ef3767e18a7020b942c82b5898014f72e',
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Retrieve stored user accounts with credentials
  const getStoredAccounts = (): StoredUserAccount[] => {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        return SEED_ACCOUNTS;
      }
      const stored = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as StoredUserAccount[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge seed accounts ensuring unique emails
          const merged = [...parsed];
          SEED_ACCOUNTS.forEach((seed) => {
            if (!merged.some((m) => m.email.toLowerCase() === seed.email.toLowerCase())) {
              merged.push(seed);
            }
          });
          return merged;
        }
      }
    } catch (e) {
      console.warn('Failed to read accounts from storage:', e);
    }
    return SEED_ACCOUNTS;
  };

  const saveStoredAccounts = (accounts: StoredUserAccount[]) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
      }
    } catch (e) {
      console.warn('Failed to save accounts to storage:', e);
    }
  };

  // Restore authenticated session on app boot
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const savedSession =
          localStorage.getItem(SESSION_STORAGE_KEY) || sessionStorage.getItem(SESSION_STORAGE_KEY);
        if (savedSession) {
          const parsed = JSON.parse(savedSession) as User;
          // Verify that this user still exists in registered accounts
          const accounts = getStoredAccounts();
          const exists = accounts.some((a) => a.id === parsed.id && a.email.toLowerCase() === parsed.email.toLowerCase());
          if (exists) {
            setUser(parsed);
          } else {
            localStorage.removeItem(SESSION_STORAGE_KEY);
            sessionStorage.removeItem(SESSION_STORAGE_KEY);
          }
        }
      }
    } catch {
      localStorage.removeItem(SESSION_STORAGE_KEY);
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Persist session to local/session storage
  const persistSession = (newUser: User | null, remember = true) => {
    setUser(newUser);
    if (newUser) {
      // Never store passwordHash or salt in the active session object
      const safeUser: User = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        primaryRole: newUser.primaryRole,
        roles: newUser.roles,
        avatarUrl: newUser.avatarUrl,
        createdAt: newUser.createdAt,
        isProvider: newUser.isProvider,
        isAdmin: newUser.isAdmin,
      };

      if (remember) {
        localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(safeUser));
      } else {
        sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(safeUser));
      }
    } else {
      localStorage.removeItem(SESSION_STORAGE_KEY);
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    }
  };

  // Authenticated Login with strict email and salted SHA-256 password verification
  const login = async (credentials: LoginCredentials): Promise<{ success: boolean; error?: string }> => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const emailTrimmed = credentials.email?.trim().toLowerCase();
    const password = credentials.password ?? '';

    // 1. Email format check
    if (!emailTrimmed || !isValidEmail(emailTrimmed)) {
      return { success: false, error: 'Please enter a valid email address.' };
    }

    // 2. Password presence check
    if (!password) {
      return { success: false, error: 'Please enter your password.' };
    }

    // 3. Find registered account (never auto-create accounts at login!)
    const accounts = getStoredAccounts();
    const matched = accounts.find((u) => u.email.toLowerCase() === emailTrimmed);

    if (!matched) {
      return {
        success: false,
        error: 'No account found with this email. Please check your email or sign up.',
      };
    }

    // 4. Verify password hash using the user's specific salt
    const computedHash = await hashPassword(password, matched.salt);
    if (computedHash !== matched.passwordHash) {
      return {
        success: false,
        error: 'Incorrect password. Please verify your password and try again.',
      };
    }

    // 5. Successful login
    const { passwordHash, salt, ...safeUser } = matched;
    persistSession(safeUser, credentials.rememberMe ?? true);
    return { success: true };
  };

  // Secure User Registration with full email validation, duplicate detection, and password hashing
  const register = async (data: RegisterData): Promise<{ success: boolean; error?: string }> => {
    await new Promise((resolve) => setTimeout(resolve, 350));

    const nameTrimmed = data.name?.trim();
    const emailTrimmed = data.email?.trim().toLowerCase();
    const phoneTrimmed = data.phone?.trim();
    const password = data.password ?? '';

    // 1. Name validation
    if (!nameTrimmed) {
      return { success: false, error: 'Please enter your full name.' };
    }

    // 2. Rigorous email validation (rejects invalid syntax, missing domains, or disposable hosts)
    if (!isValidEmail(emailTrimmed)) {
      return {
        success: false,
        error: 'Please enter a valid, original email address (e.g. yourname@domain.com).',
      };
    }

    // 3. Duplicate email verification
    const accounts = getStoredAccounts();
    if (accounts.some((u) => u.email.toLowerCase() === emailTrimmed)) {
      return {
        success: false,
        error: 'An account with this email address already exists. Please sign in instead.',
      };
    }

    // 4. Phone number validation
    if (!isValidPhone(phoneTrimmed)) {
      return { success: false, error: 'Please enter a valid 10-digit mobile number.' };
    }

    // 5. Password strength check (min 8 chars, letters and numbers)
    const passCheck = isValidPassword(password);
    if (!passCheck.valid) {
      return { success: false, error: passCheck.error };
    }

    // 6. Confirm password matching
    if (data.confirmPassword && password !== data.confirmPassword) {
      return { success: false, error: 'Passwords do not match.' };
    }

    // 7. Terms and conditions acceptance
    if (!data.acceptTerms) {
      return { success: false, error: 'You must accept the Terms and Conditions to register.' };
    }

    // 8. Cryptographically salt and hash password
    const salt = generateSalt();
    const passwordHash = await hashPassword(password, salt);

    const isProvider = data.accountType === 'provider';
    const roles: UserRole[] = isProvider ? ['ev_owner', 'provider'] : ['ev_owner'];

    const newAccount: StoredUserAccount = {
      id: `user-${Date.now()}`,
      name: nameTrimmed,
      email: emailTrimmed,
      phone: phoneTrimmed,
      primaryRole: data.accountType,
      roles,
      createdAt: new Date().toISOString(),
      isProvider,
      isAdmin: false,
      salt,
      passwordHash,
    };

    // 9. Persist new account
    const updatedAccounts = [...accounts, newAccount];
    saveStoredAccounts(updatedAccounts);

    // 10. Automatically log in the user upon successful registration
    const { passwordHash: _ph, salt: _s, ...safeUser } = newAccount;
    persistSession(safeUser, true);

    return { success: true };
  };

  // Sign out
  const logout = () => {
    persistSession(null);
  };

  // Activate provider mode for an EV owner
  const becomeProvider = () => {
    if (!user) return;
    const updatedUser: User = {
      ...user,
      isProvider: true,
      roles: user.roles.includes('provider') ? user.roles : [...user.roles, 'provider'],
    };

    // Update in stored accounts
    const accounts = getStoredAccounts();
    const updatedAccounts = accounts.map((a) => (a.id === user.id ? { ...a, ...updatedUser } : a));
    saveStoredAccounts(updatedAccounts);

    persistSession(updatedUser);
  };

  // Switch role for admin/testing
  const switchRole = (role: UserRole) => {
    if (!user) return;
    let roles: UserRole[];
    let isProvider = false;
    let isAdmin = false;

    if (role === 'admin') {
      roles = ['ev_owner', 'provider', 'admin'];
      isProvider = true;
      isAdmin = true;
    } else if (role === 'provider') {
      roles = ['ev_owner', 'provider'];
      isProvider = true;
      isAdmin = false;
    } else {
      roles = ['ev_owner'];
      isProvider = false;
      isAdmin = false;
    }

    const updatedUser: User = {
      ...user,
      roles,
      primaryRole: role,
      isAdmin,
      isProvider,
    };

    const accounts = getStoredAccounts();
    const updatedAccounts = accounts.map((a) => (a.id === user.id ? { ...a, ...updatedUser } : a));
    saveStoredAccounts(updatedAccounts);

    persistSession(updatedUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        becomeProvider,
        switchRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
