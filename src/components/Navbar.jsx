import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, UserCircle, ShieldCheck, LogOut } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);
  const [admin, setAdmin] = useState(false);

  const loadLoginState = () => {
    try {
      const loggedIn = localStorage.getItem("vrLoggedIn") === "true";
      const savedCustomer = JSON.parse(
        localStorage.getItem("vrLoggedInCustomer") || "null"
      );

      setCustomer(loggedIn && savedCustomer ? savedCustomer : null);
      setAdmin(localStorage.getItem("vrOwnerLoggedIn") === "true");
    } catch {
      setCustomer(null);
      setAdmin(false);
    }
  };

  useEffect(() => {
    loadLoginState();

    window.addEventListener("storage", loadLoginState);
    window.addEventListener("vrLoginChanged", loadLoginState);

    return () => {
      window.removeEventListener("storage", loadLoginState);
      window.removeEventListener("vrLoginChanged", loadLoginState);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("vrLoggedIn");
    localStorage.removeItem("vrLoggedInCustomer");
    localStorage.removeItem("vrOwnerLoggedIn");

    setCustomer(null);
    setAdmin(false);

    navigate("/");
    window.location.reload();
  };

  const getShortName = (name) => {
    if (!name) return "Customer";
    return name.trim().split(/\s+/)[0];
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="brand">
          <div className="brand-logo">VR</div>

          <div className="brand-text">
            <strong>VR LUXURY PG</strong>
            <span>VENKATA RAVANAIAH</span>
          </div>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/food">Food</Link>
          <Link to="/about">About</Link>
          <Link to="/rules">Rules</Link>
        </nav>

        <div className="nav-actions">

          <a href="tel:8985260247" className="contact-link">
            <Phone size={20} />
            <span>Contact</span>
          </a>

          {admin ? (
            <>
              <Link to="/owner-dashboard" className="nav-user-btn admin-user-btn">
                <ShieldCheck size={18} />
                <span>Admin</span>
              </Link>

              <button onClick={logout} className="nav-logout-btn">
                <LogOut size={17} />
              </button>
            </>
          ) : customer ? (
            <>
              <Link to="/dashboard" className="nav-user-btn customer-user-btn">
                <UserCircle size={18} />
                <span>{getShortName(customer.name)}</span>
              </Link>

              <button onClick={logout} className="nav-logout-btn">
                <LogOut size={17} />
              </button>
            </>
          ) : (
            <Link to="/login" className="login-btn">
              <UserCircle size={18} />
              <span>Login</span>
            </Link>
          )}

          <Link to="/rooms" className="check-rooms">
            Check Rooms
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;




