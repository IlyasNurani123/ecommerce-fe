import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Redirect to='/dashboard' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
