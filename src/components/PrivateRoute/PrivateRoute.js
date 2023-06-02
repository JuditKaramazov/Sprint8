import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem('logged'));
  return isLoggedIn ? (
    <Route {...rest} element={<Component />} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
