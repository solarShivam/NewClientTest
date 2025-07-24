import { Navigate } from "react-router-dom";

function getCookies() {
  return document.cookie.split("; ").reduce((acc, current) => {
    const [name, value] = current.split("=");
    acc[name] = decodeURIComponent(value);
    return acc;
  }, {});
}

const ProtectedRoute = ({ children }) => {

function isAuthenticated() {
  const cookies = getCookies();
  return !!cookies.token; // returns true if token exists
}

  if (!isAuthenticated()) {
    return <Navigate to="/adminLogin" replace />;
  }
  return children;
};

export default ProtectedRoute;
