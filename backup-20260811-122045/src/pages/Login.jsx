import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const customer = JSON.parse(localStorage.getItem("vrCustomer"));

    if (
      customer &&
      customer.email === email &&
      customer.password === password
    ) {
      localStorage.setItem("vrLoggedIn", "true");
      localStorage.setItem("vrLoggedInCustomer", JSON.stringify(customer));

      alert(`Welcome, ${customer.name}!`);
      navigate("/");
      window.location.reload();
    } else {
      alert("Invalid email or password. Please register first.");
    }
  };

  return (
    <main className="container-main section-padding">
      <div className="card auth-card">
        <span className="section-label">VR LUXURY PG</span>

        <h1 className="section-title">Customer Login</h1>

        <p className="section-description">
          Login to continue with your VR Luxury PG account.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register">Create Account</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;

