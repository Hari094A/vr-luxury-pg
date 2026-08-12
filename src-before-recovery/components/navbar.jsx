import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

function Navbar() {
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

          <Link to="/rooms" className="check-rooms">
            Check Rooms
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;

