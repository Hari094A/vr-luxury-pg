import { Link } from "react-router-dom";
import { Phone, User, ShieldCheck, LogOut } from "lucide-react";
import logo from "../assets/vr-logo.svg";

function Navbar() {
  const customer = (() => {
    try {
      return JSON.parse(localStorage.getItem("vrLoggedInCustomer") || "null");
    } catch {
      return null;
    }
  })();

  const customerLoggedIn = localStorage.getItem("vrLoggedIn") === "true";
  const ownerLoggedIn = localStorage.getItem("vrOwnerLoggedIn") === "true";
  const shortName = customer?.name?.trim()?.split(/\s+/)[0] || "Customer";

  const logoutCustomer = () => {
    localStorage.removeItem("vrLoggedIn");
    localStorage.removeItem("vrLoggedInCustomer");
    window.location.href = "/";
  };

  const logoutOwner = () => {
    localStorage.removeItem("vrOwnerLoggedIn");
    window.location.href = "/";
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
            <Phone size={18} />
            <span>Contact</span>
          </a>

          <Link to="/rooms" className="check-rooms">
            Check Rooms
          </Link>

          {!customerLoggedIn && !ownerLoggedIn && (
            <Link
              to="/login"
              className="login-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 18px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                whiteSpace: "nowrap",
                color: "#ffffff",
                background: "#b88932",
                border: "1px solid #d6aa52",
                visibility: "visible",
                opacity: 1
              }}
            >
              Login
            </Link>
          )}

          {customerLoggedIn && customer && (
            <>
              <Link to="/dashboard" className="customer-profile">
                <User size={17} />
                <span>Hi, {shortName}</span>
              </Link>

              <button className="logout-btn" onClick={logoutCustomer}>
                <LogOut size={17} />
                Logout
              </button>
            </>
          )}

          {ownerLoggedIn && (
            <>
              <Link to="/owner-dashboard" className="customer-profile">
                <ShieldCheck size={17} />
                <span>Admin</span>
              </Link>

              <button className="logout-btn" onClick={logoutOwner}>
                <LogOut size={17} />
                Logout
              </button>
            </>
          )}

        </div>
      </div>
    </header>
  );
}

export default Navbar;


