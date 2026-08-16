import { Link } from "react-router-dom";
import { pgInfo } from "../data/pgdata";

function Dashboard() {
  const customer = JSON.parse(
    localStorage.getItem("vrCustomer") || "null"
  );

  if (!customer) {
    return null;
  }

  return (
    <main className="dashboard-page">
      <div className="container-main section-padding">

        <div className="dashboard-topbar"><Link to="/" className="dashboard-home-link">? Back to VR Luxury PG</Link></div><div className="dashboard-header">
          <span className="section-label">VR LUXURY PG</span>

          <h1 className="section-title">
            Welcome, {customer.name} ??
          </h1>

          <p className="section-description">
            Welcome to your customer account. View rooms, rent information
            and contact the owner from here.
          </p>
        </div>

        <div className="dashboard-grid">

          <Link to="/rooms" className="dashboard-card">
            <div className="dashboard-icon">??</div>

            <h2>My Room</h2>

            <p>
              View Single, Double, Triple Sharing and other available
              accommodation options.
            </p>

            <span className="dashboard-card-link">
              View Rooms ?
            </span>
          </Link>

          <div className="dashboard-card">
            <div className="dashboard-icon">??</div>

            <h2>Rent Details</h2>

            <p>
              Monthly room rent starts from{" "}
              <strong>
                ?{Math.min(...pgInfo.rooms.map((room) => room.price))
                  .toLocaleString("en-IN")}
              </strong>
              .
            </p>

            <p>
              Security deposit:{" "}
              <strong>?{pgInfo.deposit.amount}</strong>
            </p>

            <span className="dashboard-card-link">
              View Room Prices ?
            </span>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">??</div>

            <h2>My Booking</h2>

            <p>
              You currently have no confirmed booking.
            </p>

            <p className="dashboard-muted">
              Select a room and contact the owner to enquire about
              availability.
            </p>

            <Link to="/rooms" className="dashboard-card-link">
              Choose a Room ?
            </Link>
          </div>

          <a href="tel:8985260247" className="dashboard-card">
            <div className="dashboard-icon">??</div>

            <h2>Contact Owner</h2>

            <p>
              Contact VR Luxury PG directly for room availability,
              booking and other assistance.
            </p>

            <span className="dashboard-card-link">
              Call Owner ?
            </span>
          </a>

        </div>

        <div className="dashboard-account">
          <h2>Account Information</h2>

          <div className="account-info-grid">
            <div>
              <span>Name</span>
              <strong>{customer.name}</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>{customer.email}</strong>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Dashboard;


