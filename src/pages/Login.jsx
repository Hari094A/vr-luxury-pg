import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("customer");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginType === "admin") {
      if (
        email === "owner@vrluxurypg.com" &&
        password === "VRPG@2026"
      ) {
        localStorage.setItem("vrOwnerLoggedIn", "true");
        localStorage.setItem("vrUserRole", "owner");
        navigate("/owner-dashboard");
      } else {
        alert("Invalid admin email or password.");
      }
      return;
    }

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

  const switchLogin = (type) => {
    setLoginType(type);
    setEmail("");
    setPassword("");
  };

  return (
    <main className="login-page">
      <div className="login-card">

        <div className="login-brand">
          <div className="login-logo">VR</div>
          <div>
            <h2>VR LUXURY PG</h2>
            <span>VENKATA RAVANAIAH</span>
          </div>
        </div>

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Sign in to continue to your account
        </p>

        <div className="login-tabs">
          <button
            type="button"
            className={loginType === "customer" ? "active" : ""}
            onClick={() => switchLogin("customer")}
          >
            ?? Customer Login
          </button>

          <button
            type="button"
            className={loginType === "admin" ? "active" : ""}
            onClick={() => switchLogin("admin")}
          >
            ??? Admin Login
          </button>
        </div>

        <div className="login-form-heading">
          {loginType === "customer"
            ? "Customer Login"
            : "Admin Login"}
        </div>

        <form onSubmit={handleSubmit}>

          <label>
            Email Address
          </label>

          <input
            type="email"
            placeholder={
              loginType === "customer"
                ? "Enter your email"
                : "Enter admin email"
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-submit">
            {loginType === "customer"
              ? "Login as Customer"
              : "Login as Admin"}
          </button>

        </form>

        {loginType === "customer" && (
          <p className="register-text">
            Don't have an account?{" "}
            <Link to="/register">Create Account</Link>
          </p>
        )}

        {loginType === "admin" && (
          <p className="admin-note">
            Authorized administration access only
          </p>
        )}

        <Link to="/" className="login-back">
          ? Back to VR Luxury PG
        </Link>

      </div>
    </main>
  );
}

export default Login;

