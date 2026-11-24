export type UserRole = 'ev_owner' | 'provider' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  primaryRole: UserRole;
  roles: UserRole[];
  avatarUrl?: string;
  createdAt: string;
  isProvider: boolean;
  isAdmin: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password?: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword?: string;
  accountType: 'ev_owner' | 'provider';
  acceptTerms: boolean;
}
