import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, LoginCredentials, RegisterData } from '../types/auth';

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

const STORAGE_KEY = 'charge_undo_dev_session';
const REGISTERED_USERS_KEY = 'charge_undo_dev_registered_users';

// Pre-seeded development mock accounts for testing
const SEED_USERS: User[] = [
  {
    id: 'user-driver-01',
    name: 'Arjun Nair',
    email: 'driver@chargeundo.in',
    phone: '+91 98470 12345',
    primaryRole: 'ev_owner',
    roles: ['ev_owner'],
    createdAt: '2026-01-15T10:00:00Z',
    isProvider: false,
    isAdmin: false,
  },
  {
    id: 'user-host-02',
    name: 'Kavitha Menon',
    email: 'host@chargeundo.in',
    phone: '+91 98471 23456',
    primaryRole: 'provider',
    roles: ['ev_owner', 'provider'],
    createdAt: '2026-02-01T14:30:00Z',
    isProvider: true,
    isAdmin: false,
  },
  {
    id: 'user-admin-03',
    name: 'Rahul Varma',
    email: 'admin@chargeundo.in',
    phone: '+91 98472 34567',
    primaryRole: 'admin',
    roles: ['ev_owner', 'provider', 'admin'],
    createdAt: '2025-11-10T09:00:00Z',
    isProvider: true,
    isAdmin: true,
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load registered users from local storage or initialize
  const getKnownUsers = (): User[] => {
    try {
      const stored = localStorage.getItem(REGISTERED_USERS_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as User[];
        // Merge with seed users ensuring no duplicates by email
        const merged = [...SEED_USERS];
        parsed.forEach((p) => {
          if (!merged.some((m) => m.email.toLowerCase() === p.email.toLowerCase())) {
            merged.push(p);
          }
        });
        return merged;
      }
    } catch {
      // Ignore parse errors in dev
    }
    return SEED_USERS;
  };

  // Restore session from localStorage on app boot
  useEffect(() => {
    try {
      const savedSession = localStorage.getItem(STORAGE_KEY);
      if (savedSession) {
        const parsedUser = JSON.parse(savedSession) as User;
        setUser(parsedUser);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save session when user changes
  const persistUser = (newUser: User | null, remember = true) => {
    setUser(newUser);
    if (newUser) {
      if (remember) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
      } else {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
      }
    } else {
      localStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(STORAGE_KEY);
    }
  };

  // Mock Login Handler
  const login = async (credentials: LoginCredentials): Promise<{ success: boolean; error?: string }> => {
    // Artificial slight delay for realistic UX feedback
    await new Promise((resolve) => setTimeout(resolve, 350));

    const emailTrimmed = credentials.email.trim().toLowerCase();
    const knownUsers = getKnownUsers();
    const matched = knownUsers.find((u) => u.email.toLowerCase() === emailTrimmed);

    if (matched) {
      persistUser(matched, credentials.rememberMe ?? true);
      return { success: true };
    }

    // In development mock mode, if any valid email is provided with a password, allow dynamic login
    if (emailTrimmed.includes('@') && emailTrimmed.includes('.')) {
      const dynamicUser: User = {
        id: `user-${Date.now()}`,
        name: emailTrimmed.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        email: emailTrimmed,
        phone: '+91 98000 00000',
        primaryRole: 'ev_owner',
        roles: ['ev_owner'],
        createdAt: new Date().toISOString(),
        isProvider: false,
        isAdmin: false,
      };

      // Save to known users
      const updatedKnown = [...knownUsers, dynamicUser];
      localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(updatedKnown));

      persistUser(dynamicUser, credentials.rememberMe ?? true);
      return { success: true };
    }

    return { success: false, error: 'Please enter a valid email address.' };
  };

  // Mock Registration Handler
  const register = async (data: RegisterData): Promise<{ success: boolean; error?: string }> => {
    await new Promise((resolve) => setTimeout(resolve, 400));

    const emailTrimmed = data.email.trim().toLowerCase();
    const knownUsers = getKnownUsers();

    if (knownUsers.some((u) => u.email.toLowerCase() === emailTrimmed)) {
      return {
        success: false,
        error: 'An account with this email address already exists. Please sign in instead.',
      };
    }

    const isProvider = data.accountType === 'provider';
    const roles: UserRole[] = isProvider ? ['ev_owner', 'provider'] : ['ev_owner'];

    const newUser: User = {
      id: `user-${Date.now()}`,
      name: data.name.trim(),
      email: emailTrimmed,
      phone: data.phone.trim(),
      primaryRole: data.accountType,
      roles,
      createdAt: new Date().toISOString(),
      isProvider,
      isAdmin: false,
    };

    const updatedKnown = [...knownUsers, newUser];
    localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(updatedKnown));
    persistUser(newUser, true);

    return { success: true };
  };

  // Logout Handler
  const logout = () => {
    persistUser(null);
  };

  // Allow an existing EV owner to activate charger provider functionality on the same account
  const becomeProvider = () => {
    if (!user) return;
    const updatedUser: User = {
      ...user,
      isProvider: true,
      roles: user.roles.includes('provider') ? user.roles : [...user.roles, 'provider'],
    };
    persistUser(updatedUser);
  };

  // Role switch utility for quick testing
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

    // Update registered users cache so changes stick across reloads
    try {
      const knownUsers = getKnownUsers();
      const updatedKnown = knownUsers.map((u) => (u.id === user.id ? updatedUser : u));
      localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(updatedKnown));
    } catch {
      // Ignore in dev
    }

    persistUser(updatedUser);
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
