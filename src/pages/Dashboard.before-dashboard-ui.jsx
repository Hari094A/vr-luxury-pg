import { Link } from "react-router-dom";
import { pgInfo } from "../data/pgdata";

function Dashboard() {
  const customer = JSON.parse(
    localStorage.getItem("vrCustomer") || "null"
  );

  let booking = null;

  try {
    booking = JSON.parse(
      localStorage.getItem("vrBooking") || "null"
    );
  } catch {
    booking = null;
  }

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

          {/* MY ROOM */}
          {booking?.roomId ? (
            <Link
              to={"/rooms/" + booking.roomId}
              className="dashboard-card customer-dashboard-room-card"
            >
              <div className="dashboard-icon">ROOM</div>

              <span className="customer-card-label">
                YOUR ACCOMMODATION
              </span>

              <h2>My Room</h2>

              <h3 className="customer-card-highlight">
                {booking.roomTitle || "Booked Room"}
              </h3>

              <div className="customer-card-details">
                <div>
                  <span>Sharing</span>
                  <strong>
                    {booking.capacity
                      ? booking.capacity + " Person"
                      : "Selected Room"}
                  </strong>
                </div>

                <div>
                  <span>Monthly Rent</span>
                  <strong>
                    ?{Number(booking.rent || 0).toLocaleString("en-IN")}
                  </strong>
                </div>
              </div>

              <span className="dashboard-card-link customer-card-button">
                View My Booked Room
              </span>
            </Link>
          ) : (
            <div className="dashboard-card customer-dashboard-empty-card">
              <div className="dashboard-icon">ROOM</div>

              <span className="customer-card-label">
                YOUR ACCOMMODATION
              </span>

              <h2>My Room</h2>

              <p>
                You have not selected a room yet. Choose your preferred
                sharing option and send a booking enquiry.
              </p>

              <Link
                to="/rooms"
                className="dashboard-card-link customer-card-button"
              >
                Browse Rooms
              </Link>
            </div>
          )}

          {/* RENT DETAILS */}
          <div className="dashboard-card customer-dashboard-rent-card">
            <div className="dashboard-icon">RENT</div>

            <span className="customer-card-label">
              PAYMENT INFORMATION
            </span>

            <h2>Rent Details</h2>

            {booking?.roomId ? (
              <>
                <div className="customer-rent-summary">
                  <div>
                    <span>Monthly Rent</span>
                    <strong>
                      ?{Number(booking.rent || 0).toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <div>
                    <span>Security Deposit</span>
                    <strong>
                      ?{Number(pgInfo.deposit.amount).toLocaleString("en-IN")}
                    </strong>
                  </div>
                </div>

                <p className="customer-rent-note">
                  Your rent is based on the room selected in your booking.
                  Food and electricity charges are included according to
                  the PG plan.
                </p>

                <Link
                  to="/rooms"
                  className="dashboard-card-link customer-card-button"
                >
                  View All Room Prices
                </Link>
              </>
            ) : (
              <>
                <div className="customer-rent-summary">
                  <div>
                    <span>Starting Rent</span>
                    <strong>
                      ?{Math.min(
                        ...pgInfo.rooms.map((room) => Number(room.price) || 0)
                      ).toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <div>
                    <span>Security Deposit</span>
                    <strong>
                      ?{Number(pgInfo.deposit.amount).toLocaleString("en-IN")}
                    </strong>
                  </div>
                </div>

                <p className="customer-rent-note">
                  Select a room to see your exact monthly rent.
                </p>

                <Link
                  to="/rooms"
                  className="dashboard-card-link customer-card-button"
                >
                  View Room Prices
                </Link>
              </>
            )}
          </div>

          {/* MY BOOKING */}
          <div className="dashboard-card customer-dashboard-booking-card">
            <div className="dashboard-icon">BOOK</div>

            <span className="customer-card-label">
              BOOKING INFORMATION
            </span>

            <h2>My Booking</h2>

            {booking ? (
              <>
                <div
                  className={
                    "customer-booking-mini-status " +
                    (booking.status === "Accepted"
                      ? "status-accepted"
                      : booking.status === "Declined"
                      ? "status-declined"
                      : "status-pending")
                  }
                >
                  <span>
                    {booking.status === "Accepted"
                      ? "ACCEPTED"
                      : booking.status === "Declined"
                      ? "DECLINED"
                      : "PENDING"}
                  </span>

                  <strong>
                    {booking.status === "Accepted"
                      ? "Booking Accepted"
                      : booking.status === "Declined"
                      ? "Booking Declined"
                      : "Waiting for Owner"}
                  </strong>
                </div>

                <div className="customer-booking-mini-details">
                  <div>
                    <span>Selected Room</span>
                    <strong>
                      {booking.roomTitle || "Room enquiry"}
                    </strong>
                  </div>

                  <div>
                    <span>Enquiry Date</span>
                    <strong>
                      {booking.createdAt
                        ? new Date(booking.createdAt).toLocaleDateString("en-IN")
                        : "Not available"}
                    </strong>
                  </div>
                </div>

                {booking.ownerResponse && (
                  <div className="customer-mini-response">
                    <span>Owner Response</span>
                    <p>{booking.ownerResponse}</p>
                  </div>
                )}

                <Link
                  to={
                    booking.roomId
                      ? "/rooms/" + booking.roomId + "/enquire"
                      : "/rooms"
                  }
                  className="dashboard-card-link customer-card-button"
                >
                  View Booking
                </Link>
              </>
            ) : (
              <>
                <div className="customer-booking-mini-status status-none">
                  <span>NO BOOKING</span>
                  <strong>Choose Your Room</strong>
                </div>

                <p>
                  You have not sent a room enquiry yet. Select a room and
                  submit your booking request to the owner.
                </p>

                <Link
                  to="/rooms"
                  className="dashboard-card-link customer-card-button"
                >
                  Book a Room
                </Link>
              </>
            )}
          </div>

          {/* CONTACT OWNER */}
          <a
            href={"tel:" + pgInfo.phone}
            className="dashboard-card customer-dashboard-contact-card"
          >
            <div className="dashboard-icon">CALL</div>

            <span className="customer-card-label">
              CUSTOMER SUPPORT
            </span>

            <h2>Contact Owner</h2>

            <p>
              Need help with your room, booking, rent or availability?
              Contact the VR Luxury PG owner directly.
            </p>

            <span className="dashboard-card-link customer-card-button">
              Call Owner
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


