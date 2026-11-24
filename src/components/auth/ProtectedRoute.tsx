import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#080A09] flex flex-col items-center justify-center text-white">
        <Loader2 className="w-8 h-8 text-[#8CF06B] animate-spin mb-4" />
        <p className="text-zinc-400 text-sm font-medium">Verifying session...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Preserve requested URL in navigation state so login can redirect back
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
