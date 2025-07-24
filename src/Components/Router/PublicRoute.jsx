// PublicRoute.jsx
import { Navigate } from "react-router-dom";

// Utility
function getCookies() {
  return document.cookie.split("; ").reduce((acc, current) => {
    const [name, value] = current.split("=");
    acc[name] = decodeURIComponent(value);
    return acc;
  }, {});
}

function isAuthenticated() {
  const cookies = getCookies();
  return !!cookies.token;
}



const PublicRoute = ({ children }) => {
    const valid = isAuthenticated();
    console.log("valid",valid);
    
  if (isAuthenticated()) {
    // If user is logged in, redirect to dashboard
    return <Navigate to="/admin" replace />;
  }
  // If not logged in, allow access
  return children;
};

export default PublicRoute;
