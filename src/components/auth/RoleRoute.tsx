import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../types/auth';

interface RoleRouteProps {
  requiredRole: UserRole;
  children?: React.ReactNode;
}

export const RoleRoute: React.FC<RoleRouteProps> = ({ requiredRole, children }) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const hasRole =
    user &&
    (user.roles.includes(requiredRole) ||
      (requiredRole === 'provider' && user.isProvider) ||
      (requiredRole === 'admin' && user.isAdmin));

  if (!hasRole) {
    return (
      <Navigate
        to="/access-denied"
        state={{
          requiredRole,
          from: location.pathname,
        }}
        replace
      />
    );
  }

  return children ? <>{children}</> : <Outlet />;
};
