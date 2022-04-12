import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './auth';

export const Login = () => {
  const [user, setUser] = useState('');
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const redirectPath = location.state?.path || '/';

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <label htmlFor="username">
        Username:{' '}
        <input
          type="text"
          name="username"
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
