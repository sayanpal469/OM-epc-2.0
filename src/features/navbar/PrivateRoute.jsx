import { Route, Navigate } from "react-router-dom";

const isAuthenticated = () => {
  // Implement your authentication logic here, e.g., check for a token in localStorage
  return localStorage.getItem("token") !== null;
};

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ path, element }) => {
  
  return isAuthenticated() ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default PrivateRoute;
