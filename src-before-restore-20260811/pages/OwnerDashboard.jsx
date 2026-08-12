import { Link, useNavigate } from "react-router-dom";
import { pgInfo } from "../data/pgdata";

function OwnerDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("vrOwnerLoggedIn");
    navigate("/owner-login");
  };

  const customers = localStorage.getItem("vrCustomer") ? 1 : 0;
  const enquiry = JSON.parse(localStorage.getItem("vrBooking") || "null");
  const availableRooms = pgInfo.rooms.filter((room) => room.available).length;

  return (
    <main className="owner-dashboard">
      <div className="container-main section-padding">

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "15px",
          marginBottom: "25px",
          flexWrap: "wrap"
        }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "11px 18px",
              borderRadius: "10px",
              background: "#2563eb",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "700"
            }}
          >
            ← Back to Home
          </Link>

          <button
            onClick={logout}
            style={{
              padding: "11px 18px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontWeight: "700"
            }}
          >
            Logout
          </button>
        </div>

        <div className="owner-topbar">
          <div>
            <span className="section-label">VR LUXURY PG</span>
            <h1 className="section-title">Admin Dashboard</h1>
            <p className="section-description">
              Manage rooms, customers and PG information.
            </p>
          </div>
        </div>

        <div className="owner-stats">
          <div className="owner-stat">
            <span>🛏️</span>
            <strong>{availableRooms}</strong>
            <p>Available Rooms</p>
          </div>

          <div className="owner-stat">
            <span>👥</span>
            <strong>{customers}</strong>
            <p>Registered Customers</p>
          </div>

          <div className="owner-stat">
            <span>📋</span>
            <strong>{enquiry ? 1 : 0}</strong>
            <p>Room Enquiries</p>
          </div>
        </div>

        <div className="owner-section">
          <h2>Room Availability</h2>
          <p>Current room status.</p>

          <div className="owner-room-list">
            {pgInfo.rooms.map((room) => (
              <div className="owner-room" key={room.id}>
                <div>
                  <strong>{room.title}</strong>
                  <span>
                    ₹{room.price.toLocaleString("en-IN")}/month ·{" "}
                    {room.capacity}{" "}
                    {room.capacity === 1 ? "Person" : "People"}
                  </span>
                </div>

                <span className={
                  room.available
                    ? "owner-available"
                    : "owner-occupied"
                }>
                  {room.available ? "Available" : "Occupied"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="owner-section">
          <h2>Latest Customer Enquiry</h2>

          {enquiry ? (
            <div className="owner-enquiry">
              <div>
                <strong>{enquiry.customerName}</strong>
                <span>{enquiry.customerEmail}</span>
                <span>{enquiry.customerPhone}</span>
              </div>

              <div>
                <strong>{enquiry.roomTitle}</strong>
                <span>
                  ₹{enquiry.rent.toLocaleString("en-IN")}/month
                </span>
                <span>{enquiry.status}</span>
              </div>
            </div>
          ) : (
            <p className="owner-empty">
              No customer enquiries yet.
            </p>
          )}
        </div>

      </div>
    </main>
  );
}

export default OwnerDashboard;
