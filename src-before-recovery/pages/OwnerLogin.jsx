import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function OwnerLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email === "owner@vrluxurypg.com" &&
      password === "VRPG@2026"
    ) {
      localStorage.setItem("vrOwnerLoggedIn", "true");
      navigate("/owner-dashboard");
    } else {
      alert("Invalid owner email or password.");
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">

        <span className="section-label">
          VR LUXURY PG
        </span>

        <h1 className="section-title">
          Owner Login
        </h1>

        <p className="section-description">
          Sign in to manage rooms, enquiries and PG information.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Owner Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Owner Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn-primary"
          >
            Owner Login
          </button>

        </form>

        <Link to="/" className="auth-back-link">
          ← Back to VR Luxury PG
        </Link>

      </div>
    </main>
  );
}

export default OwnerLogin;
