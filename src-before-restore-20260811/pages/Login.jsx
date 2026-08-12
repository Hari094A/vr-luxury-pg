import { Link } from "react-router-dom";
import { User, ShieldCheck } from "lucide-react";

function Login() {
  return (
    <main className="container-main section-padding">
      <div className="card auth-card">
        <span className="section-label">VR LUXURY PG</span>

        <h1 className="section-title">Welcome Back</h1>

        <p className="section-description">
          Select your account type to continue.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
          marginTop: "28px"
        }}>

          <div style={{
            padding: "28px",
            border: "1px solid var(--border, #334155)",
            borderRadius: "16px",
            textAlign: "center"
          }}>
            <User size={42} />

            <h2 style={{ marginTop: "14px" }}>
              Customer Login
            </h2>

            <p>
              Login to view rooms, facilities, food,
              rules and your customer dashboard.
            </p>

            <Link
              to="/customer-login"
              className="btn-primary"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                textDecoration: "none",
                marginTop: "14px"
              }}
            >
              Customer Login
            </Link>

            <p style={{ marginTop: "14px" }}>
              New customer?{" "}
              <Link to="/register">Create Account</Link>
            </p>
          </div>

          <div style={{
            padding: "28px",
            border: "1px solid var(--border, #334155)",
            borderRadius: "16px",
            textAlign: "center"
          }}>
            <ShieldCheck size={42} />

            <h2 style={{ marginTop: "14px" }}>
              Owner / Admin Login
            </h2>

            <p>
              Access the owner dashboard to manage
              PG information and check details.
            </p>

            <Link
              to="/owner-login"
              className="btn-primary"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                textDecoration: "none",
                marginTop: "14px"
              }}
            >
              Owner Login
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Login;
