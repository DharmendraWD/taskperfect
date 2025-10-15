// src/components/auth/PrivateRoute.jsx
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect, useRef } from 'react';

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const location = useLocation();
  const hasShownToast = useRef(false); // to prevent multiple toasts on re-renders

  useEffect(() => {
    if (!isAuthenticated && !hasShownToast.current) {
      toast.warning('Please log in to access this page');
      hasShownToast.current = true;
    }
  }, [isAuthenticated]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace state={{ from: location }} />;
};

export default PrivateRoute;
