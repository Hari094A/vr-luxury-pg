import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, XCircle, Clock3, ArrowRight } from "lucide-react";
import { pgInfo } from "../data/pgdata";

function Dashboard() {
  const customer = JSON.parse(
    localStorage.getItem("vrCustomer") || "null"
  );

  const [booking, setBooking] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("vrBooking") || "null");
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const refreshBooking = () => {
      try {
        setBooking(JSON.parse(localStorage.getItem("vrBooking") || "null"));
      } catch {
        setBooking(null);
      }
    };

    window.addEventListener("storage", refreshBooking);
    window.addEventListener("vrBookingChanged", refreshBooking);

    return () => {
      window.removeEventListener("storage", refreshBooking);
      window.removeEventListener("vrBookingChanged", refreshBooking);
    };
  }, []);

  const bookingStatus = booking?.status || "Pending";

  const statusData =
    bookingStatus === "Accepted"
      ? {
          title: "Booking Accepted",
          text: "Great news! The owner has accepted your booking enquiry.",
          className: "booking-status-accepted",
          icon: <CheckCircle2 size={30} />,
        }
      : bookingStatus === "Declined"
      ? {
          title: "Booking Declined",
          text: "The owner declined this enquiry. You can choose another room.",
          className: "booking-status-declined",
          icon: <XCircle size={30} />,
        }
      : {
          title: "Booking Pending",
          text: "Your enquiry has been sent. Waiting for the owner to respond.",
          className: "booking-status-pending",
          icon: <Clock3 size={30} />,
        };

  if (!customer) {
    return null;
  }

  return (
    <main className="dashboard-page">
      <div className="container-main section-padding">

        <div className="dashboard-topbar"><Link to="/" className="dashboard-home-link">← Back to VR Luxury PG</Link></div><div className="dashboard-header">
          <span className="section-label">VR LUXURY PG</span>

          <h1 className="section-title">
            Welcome, {customer.name} 👋
          </h1>

          <p className="section-description">
            Welcome to your customer account. View rooms, rent information
            and contact the owner from here.
          </p>
        </div>

        {booking ? (
          <section className={"customer-booking-status-card " + statusData.className}>
            <div className="customer-booking-status-icon">
              {statusData.icon}
            </div>

            <div className="customer-booking-status-text">
              <span>MY BOOKING</span>
              <h2>{statusData.title}</h2>
              <p>{statusData.text}</p>

              {booking.roomTitle && (
                <div className="customer-booking-room">
                  <strong>{booking.roomTitle}</strong>
                  {booking.rent && (
                    <span>
                      ?{Number(booking.rent).toLocaleString("en-IN")} / month
                    </span>
                  )}
                </div>
              )}

              <div className="customer-booking-buttons">
                {booking.roomId && (
                  <Link
                    to={"/rooms/" + booking.roomId}
                    className="customer-booking-view"
                  >
                    View Room
                  </Link>
                )}

                {bookingStatus === "Accepted" && (
                  <Link
                    to="/rooms"
                    className="customer-booking-payment"
                  >
                    Continue Booking
                    <ArrowRight size={17} />
                  </Link>
                )}

                {bookingStatus === "Declined" && (
                  <Link
                    to="/rooms"
                    className="customer-booking-payment"
                  >
                    Choose Another Room
                    <ArrowRight size={17} />
                  </Link>
                )}
              </div>
            </div>
          </section>
        ) : (
          <section className="customer-no-booking-card">
            <div className="customer-no-booking-icon">
              BOOK
            </div>

            <div>
              <span>ROOM BOOKING</span>
              <h2>Ready to book your room?</h2>
              <p>
                Choose your preferred sharing option and send a booking
                enquiry directly to the VR Luxury PG owner.
              </p>

              <Link to="/rooms" className="customer-start-booking">
                Browse Rooms
                <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        )}

        <div className="dashboard-grid">

          <Link
            to={booking?.roomId ? "/rooms/" + booking.roomId : "/rooms"}
            className="dashboard-card dashboard-my-room-card"
          >
            <div className="dashboard-icon">
              ROOM
            </div>

            <h2>
              {booking?.roomId ? "My Booked Room" : "My Room"}
            </h2>

            <p>
              {booking?.roomId
                ? "This is your selected room. Open it to see your booking room details."
                : "You have not selected a room yet. Browse the available rooms to make a booking."}
            </p>

            <span className="dashboard-card-link">
              {booking?.roomId
                ? "View My Booked Room"
                : "Browse Rooms"}
              {" ?"}
            </span>
          </Link>

          <div className="dashboard-card">
            <div className="dashboard-icon">💰</div>

            <h2>Rent Details</h2>

            <p>
              Monthly room rent starts from{" "}
              <strong>
                ₹{Math.min(...pgInfo.rooms.map((room) => room.price))
                  .toLocaleString("en-IN")}
              </strong>
              .
            </p>

            <p>
              Security deposit:{" "}
              <strong>₹{pgInfo.deposit.amount}</strong>
            </p>

            <span className="dashboard-card-link">
              View Room Prices →
            </span>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">📋</div>

            <h2>My Booking</h2>

            <p>
              You currently have no confirmed booking.
            </p>

            <p className="dashboard-muted">
              Select a room and contact the owner to enquire about
              availability.
            </p>

            <Link to="/rooms" className="dashboard-card-link">
              Choose a Room →
            </Link>
          </div>

          <a href="tel:8985260247" className="dashboard-card">
            <div className="dashboard-icon">📞</div>

            <h2>Contact Owner</h2>

            <p>
              Contact VR Luxury PG directly for room availability,
              booking and other assistance.
            </p>

            <span className="dashboard-card-link">
              Call Owner →
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
