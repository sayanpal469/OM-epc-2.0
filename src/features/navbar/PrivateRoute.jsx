import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  // Implement your authentication logic here, e.g., check for a token in localStorage
  return localStorage.getItem("token") !== null;
};

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? (
    // Render the component if authenticated
    <React.Fragment>{element}</React.Fragment>
  ) : (
    // Redirect to the login page if not authenticated
    <Navigate to="/login" replace={true} />
  );
};

export default PrivateRoute;
