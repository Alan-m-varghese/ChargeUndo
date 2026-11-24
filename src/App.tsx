import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { RoleRoute } from './components/auth/RoleRoute';
import { AppLayout } from './components/layout/AppLayout';

// Public Pages
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/public/AboutPage';
import { HowItWorksPage } from './pages/public/HowItWorksPage';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { AccessDeniedPage } from './pages/AccessDeniedPage';

// Auth Pages
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { ForgotPasswordPage } from './pages/auth/ForgotPasswordPage';

// App Pages (Protected)
import { AppExplorePlaceholder } from './pages/app/AppExplorePlaceholder';
import { AppStationDetailsPlaceholder } from './pages/app/AppStationDetailsPlaceholder';
import { AppFavouritesPlaceholder } from './pages/app/AppFavouritesPlaceholder';
import { AppBookingsPlaceholder } from './pages/app/AppBookingsPlaceholder';
import { AppVehiclesPlaceholder } from './pages/app/AppVehiclesPlaceholder';
import { AppListChargerPlaceholder } from './pages/app/AppListChargerPlaceholder';
import { AppProfilePlaceholder } from './pages/app/AppProfilePlaceholder';
import { AppProviderPlaceholder } from './pages/app/AppProviderPlaceholder';
import { AppAdminPlaceholder } from './pages/app/AppAdminPlaceholder';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Layout wrapper for public website with top navbar and footer
const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080A09] text-white flex flex-col selection:bg-[#8CF06B] selection:text-black font-sans">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Routes>
        {/* Standalone Authentication Pages (No Navbar/Footer for focused UX) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signup" element={<Navigate to="/register" replace />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Public Website Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route
            path="/contact"
            element={
              <PlaceholderPage
                title="Contact & Support"
                subtitle="Reach our team at contact@chargeundo.in for partnerships, network integration, or host queries."
                type="info"
              />
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <PlaceholderPage
                title="Privacy Policy"
                subtitle="CHARGE undo is committed to protecting the privacy of EV drivers and community hosts."
                type="info"
              />
            }
          />
          <Route
            path="/terms-and-conditions"
            element={
              <PlaceholderPage
                title="Terms and Conditions"
                subtitle="Platform terms and community charging guidelines for drivers and hosts."
                type="info"
              />
            }
          />
          <Route path="/access-denied" element={<AccessDeniedPage />} />

          {/* Legacy public redirect shortcuts to protected app */}
          <Route path="/explore" element={<Navigate to="/app/explore" replace />} />
          <Route path="/list-charger" element={<Navigate to="/app/list-charger" replace />} />

          {/* Catch-all 404 */}
          <Route
            path="*"
            element={
              <PlaceholderPage
                title="Page Not Found"
                subtitle="The requested page could not be located. Head back to the landing page."
                type="info"
              />
            }
          />
        </Route>

        {/* Protected Private Application Routes (/app/*) */}
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="explore" replace />} />
          <Route path="explore" element={<AppExplorePlaceholder />} />
          <Route path="stations/:id" element={<AppStationDetailsPlaceholder />} />
          <Route path="favourites" element={<AppFavouritesPlaceholder />} />
          <Route path="bookings" element={<AppBookingsPlaceholder />} />
          <Route path="vehicles" element={<AppVehiclesPlaceholder />} />
          <Route path="list-charger" element={<AppListChargerPlaceholder />} />
          <Route path="profile" element={<AppProfilePlaceholder />} />
          <Route path="provider" element={<AppProviderPlaceholder />} />

          {/* Administrator Route Guard */}
          <Route
            path="admin"
            element={
              <RoleRoute requiredRole="admin">
                <AppAdminPlaceholder />
              </RoleRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
