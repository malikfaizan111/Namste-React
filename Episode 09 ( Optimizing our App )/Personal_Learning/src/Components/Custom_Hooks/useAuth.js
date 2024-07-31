// useAuth.js
import { useState, useEffect } from 'react';

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Mock authentication check
    setIsAuthenticated(localStorage.getItem('auth') === 'true');
  }, []);

  return isAuthenticated;
}

export default useAuth;
