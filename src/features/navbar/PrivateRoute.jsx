import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, isAuthenticated }) => {
  console.log(isAuthenticated);
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: window.location.pathname }} />
  );
};

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;
