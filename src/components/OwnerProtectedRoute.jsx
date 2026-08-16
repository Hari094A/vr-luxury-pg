import { Navigate, useLocation } from "react-router-dom";

function OwnerProtectedRoute({ children }) {
  const location = useLocation();

  const ownerLoggedIn =
    localStorage.getItem("vrOwnerLoggedIn") === "true";

  if (!ownerLoggedIn) {
    return (
      <Navigate
        to="/owner-login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
}

export default OwnerProtectedRoute;




