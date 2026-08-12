import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  XCircle,
  Clock3,
  Home,
  CreditCard,
  Phone,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { pgInfo } from "../data/pgdata";

function Dashboard() {
  const customer = JSON.parse(
    localStorage.getItem("vrCustomer") || "null"
  );

  const [booking, setBooking] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("vrBooking") || "null"
      );
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const loadBooking = () => {
      try {
        setBooking(
          JSON.parse(
            localStorage.getItem("vrBooking") || "null"
          )
        );
      } catch {
        setBooking(null);
      }
    };

    loadBooking();

    window.addEventListener("storage", loadBooking);
    window.addEventListener("vrBookingChanged", loadBooking);

    return () => {
      window.removeEventListener("storage", loadBooking);
      window.removeEventListener("vrBookingChanged", loadBooking);
    };
  }, []);

  if (!customer) {
    return null;
  }

  const status = booking?.status || "No Booking";

  const statusConfig =
    status === "Accepted"
      ? {
          title: "Booking Accepted",
          message:
            "Great news! Your room enquiry has been accepted by the owner.",
          icon: <CheckCircle2 size={28} />,
          className: "customer-booking-accepted",
        }
      : status === "Declined"
      ? {
          title: "Booking Declined",
          message:
            "Your room enquiry was declined by the owner. You can choose another available room.",
          icon: <XCircle size={28} />,
          className: "customer-booking-declined",
        }
      : {
          title: "Booking Enquiry Pending",
          message:
            "Your enquiry has been sent. The owner will review it and update your booking status.",
          icon: <Clock3 size={28} />,
          className: "customer-booking-pending",
        };

  return (
    <main className="dashboard-page">
      <div className="container-main section-padding">

        <div className="dashboard-topbar">
          <Link
            to="/"
            className="dashboard-home-link"
          >
            ? Back to VR Luxury PG
          </Link>
        </div>

        <div className="dashboard-header">
          <span className="section-label">
            VR LUXURY PG CUSTOMER PORTAL
          </span>

          <h1 className="section-title">
            Welcome, {customer.name} ??
          </h1>

          <p className="section-description">
            Manage your room enquiry, booking status, rent information
            and contact the owner from your dashboard.
          </p>
        </div>

        {booking ? (
          <section className="customer-booking-panel">

            <div className={"customer-booking-status " + statusConfig.className}>
              <div className="customer-booking-status-icon">
                {statusConfig.icon}
              </div>

              <div>
                <span>BOOKING STATUS</span>
                <h2>{statusConfig.title}</h2>
                <p>{statusConfig.message}</p>
              </div>
            </div>

            <div className="customer-booking-content">

              <div className="customer-booking-main">

                <div>
                  <span className="customer-booking-label">
                    SELECTED ROOM
                  </span>

                  <h3>
                    {booking.roomTitle || "Selected Room"}
                  </h3>
                </div>

                <div className="customer-booking-price">
                  <span>MONTHLY RENT</span>
                  <strong>
                    ?
                    {Number(
                      booking.rent || 0
                    ).toLocaleString("en-IN")}
                  </strong>
                  <small>/ month</small>
                </div>

              </div>

              <div className="customer-booking-info-grid">

                <div>
                  <Home size={18} />
                  <span>Room</span>
                  <strong>
                    {booking.roomTitle || "Room"}
                  </strong>
                </div>

                <div>
                  <CreditCard size={18} />
                  <span>Security Deposit</span>
                  <strong>
                    ?
                    {Number(
                      pgInfo.deposit.amount
                    ).toLocaleString("en-IN")}
                  </strong>
                </div>

                <div>
                  <CalendarDays size={18} />
                  <span>Enquiry Date</span>
                  <strong>
                    {booking.createdAt
                      ? new Date(
                          booking.createdAt
                        ).toLocaleDateString("en-IN")
                      : "Not available"}
                  </strong>
                </div>

              </div>

              {booking.ownerResponse && (
                <div className="customer-owner-response">
                  <strong>Owner's Response</strong>
                  <p>{booking.ownerResponse}</p>
                </div>
              )}

              <div className="customer-booking-actions">

                {booking.roomId && (
                  <Link
                    to={"/rooms/" + booking.roomId}
                    className="customer-booking-view-btn"
                  >
                    <Home size={17} />
                    View Room
                  </Link>
                )}

                {status === "Accepted" && (
                  <Link
                    to={
                      "/rooms/" +
                      booking.roomId +
                      "/payment"
                    }
                    className="customer-booking-payment-btn"
                  >
                    <CreditCard size={17} />
                    Proceed to Payment
                    <ArrowRight size={17} />
                  </Link>
                )}

                {status === "Declined" && (
                  <Link
                    to="/rooms"
                    className="customer-booking-new-btn"
                  >
                    Choose Another Room
                    <ArrowRight size={17} />
                  </Link>
                )}

              </div>

            </div>

          </section>
        ) : (
          <section className="customer-no-booking">

            <div className="customer-no-booking-icon">
              ??
            </div>

            <div>
              <span>ROOM BOOKING</span>

              <h2>
                You haven't selected a room yet
              </h2>

              <p>
                Browse the available rooms, choose the sharing option
                that suits you and send an enquiry to the owner.
              </p>

              <Link
                to="/rooms"
                className="customer-booking-new-btn"
              >
                Browse Available Rooms
                <ArrowRight size={18} />
              </Link>
            </div>

          </section>
        )}

        <div className="dashboard-grid">

          <Link
            to="/rooms"
            className="dashboard-card"
          >
            <div className="dashboard-icon">
              ??
            </div>

            <h2>My Room</h2>

            <p>
              View Single, Double, Triple Sharing and other
              accommodation options.
            </p>

            <span className="dashboard-card-link">
              View Rooms ?
            </span>
          </Link>

          <div className="dashboard-card">
            <div className="dashboard-icon">
              ??
            </div>

            <h2>Rent Details</h2>

            <p>
              Monthly room rent starts from{" "}
              <strong>
                ?
                {Math.min(
                  ...pgInfo.rooms.map(
                    (room) => room.price
                  )
                ).toLocaleString("en-IN")}
              </strong>
              .
            </p>

            <p>
              Security deposit:{" "}
              <strong>
                ?
                {Number(
                  pgInfo.deposit.amount
                ).toLocaleString("en-IN")}
              </strong>
            </p>

            <Link
              to="/rooms"
              className="dashboard-card-link"
            >
              View Room Prices ?
            </Link>
          </div>

          <Link
            to="/rooms"
            className="dashboard-card"
          >
            <div className="dashboard-icon">
              ??
            </div>

            <h2>Book a Room</h2>

            <p>
              Choose your preferred room and send an enquiry
              directly to the owner.
            </p>

            <span className="dashboard-card-link">
              Start Booking ?
            </span>
          </Link>

          <a
            href={"tel:" + pgInfo.phone}
            className="dashboard-card"
          >
            <div className="dashboard-icon">
              ??
            </div>

            <h2>Contact Owner</h2>

            <p>
              Contact VR Luxury PG directly for room
              availability, booking and assistance.
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
