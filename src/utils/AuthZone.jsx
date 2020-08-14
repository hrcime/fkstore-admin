import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthZone = ({ children, ...props }) => {
  const isAuthenticated = true;

  const checkAuth = (location) => {
    return isAuthenticated ? (
      children
    ) : (
      <Redirect to={{ pathname: "login" }} />
    );
  };

  return <Route {...props} render={checkAuth} />;
};

export default AuthZone;
