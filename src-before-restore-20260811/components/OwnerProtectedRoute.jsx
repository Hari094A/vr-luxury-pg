import { Navigate } from "react-router-dom";

function OwnerProtectedRoute({ children }) {
  const ownerLoggedIn =
    localStorage.getItem("vrOwnerLoggedIn") === "true";

  if (!ownerLoggedIn) {
    return <Navigate to="/owner-login" replace />;
  }

  return children;
}

export default OwnerProtectedRoute;
