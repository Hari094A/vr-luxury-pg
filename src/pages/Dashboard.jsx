import { Link } from "react-router-dom";
import { ArrowRight, BedDouble, IndianRupee, ClipboardList, Phone, Home, ShieldCheck } from "lucide-react";
import { pgInfo } from "../data/pgdata";

function Dashboard() {
  const customer = JSON.parse(
    localStorage.getItem("vrCustomer") || "null"
  );

  if (!customer) return null;

  const booking =
    JSON.parse(localStorage.getItem("vrBooking") || "null") ||
    JSON.parse(localStorage.getItem("vrCustomerBooking") || "null");

  const bookedRoomId =
    booking?.roomId ||
    booking?.room?.id ||
    customer?.roomId ||
    customer?.bookedRoomId ||
    null;

  const bookedRoom = bookedRoomId
    ? pgInfo.rooms.find((room) => room.id === bookedRoomId)
    : null;

  const minimumRent = Math.min(
    ...pgInfo.rooms.map((room) => Number(room.price))
  );

  const shortName = customer.name
    ? customer.name.trim().split(/\s+/)[0]
    : "Customer";

  return (
    <main className="dashboard-page">
      <div className="container-main section-padding">

        <div className="dashboard-topbar">
          <Link to="/" className="dashboard-home-link">
            <Home size={16} />
            Back to VR Luxury PG
          </Link>
        </div>

        <section className="dashboard-header">
          <span className="section-label">VR LUXURY PG · CUSTOMER PORTAL</span>

          <h1 className="section-title">
            Welcome, {shortName}
          </h1>

          <p className="section-description">
            Manage your room, rent information, booking status and account
            details from one place.
          </p>
        </section>

        <section className="dashboard-grid">

          {/* MY ROOM */}
          <div className="dashboard-card dashboard-feature-card">
            <div className="dashboard-card-top">
              <div className="dashboard-icon dashboard-icon-room">
                <BedDouble size={22} />
              </div>

              <span className="dashboard-status-badge">
                {bookedRoom ? "BOOKED ROOM" : "NO ROOM"}
              </span>
            </div>

            <h2>My Room</h2>

            {bookedRoom ? (
              <>
                <p className="dashboard-card-highlight">
                  {bookedRoom.title}
                </p>

                <p>
                  Your selected room is shown here. Open it to see only your
                  booked room details, facilities and rent.
                </p>

                <div className="dashboard-mini-info">
                  <div>
                    <span>SHARING</span>
                    <strong>
                      {bookedRoom.capacity === 1
                        ? "Single"
                        : bookedRoom.capacity === 2
                        ? "Double"
                        : "Triple"}
                    </strong>
                  </div>

                  <div>
                    <span>MONTHLY RENT</span>
                    <strong>
                      ₹{Number(bookedRoom.price).toLocaleString("en-IN")}
                    </strong>
                  </div>
                </div>

                <Link
                  to={"/rooms/" + bookedRoom.id}
                  className="dashboard-action dashboard-action-primary"
                >
                  View My Room
                  <ArrowRight size={17} />
                </Link>
              </>
            ) : (
              <>
                <p className="dashboard-card-highlight">
                  No room selected yet
                </p>

                <p>
                  Choose a room from the available sharing options and send
                  your enquiry to the owner.
                </p>

                <Link
                  to="/rooms"
                  className="dashboard-action dashboard-action-primary"
                >
                  Explore Rooms
                  <ArrowRight size={17} />
                </Link>
              </>
            )}
          </div>

          {/* RENT */}
          <div className="dashboard-card">
            <div className="dashboard-card-top">
              <div className="dashboard-icon dashboard-icon-rent">
                <IndianRupee size={22} />
              </div>

              <span className="dashboard-card-tag">
                PRICING
              </span>
            </div>

            <h2>Rent Details</h2>

            <p>
              Monthly room rent starts from
              <strong className="dashboard-price">
                ?{minimumRent.toLocaleString("en-IN")}
              </strong>
            </p>

            <div className="dashboard-info-row">
              <span>Security Deposit</span>
              <strong>₹{Number(pgInfo.deposit.amount).toLocaleString("en-IN")}</strong>
            </div>

            <Link
              to="/rooms"
              className="dashboard-action dashboard-action-secondary"
            >
              View Room Prices
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* MY BOOKING */}
          <div className="dashboard-card">
            <div className="dashboard-card-top">
              <div className="dashboard-icon dashboard-icon-booking">
                <ClipboardList size={22} />
              </div>

              <span className="dashboard-card-tag">
                BOOKING
              </span>
            </div>

            <h2>My Booking</h2>

            {booking ? (
              <>
                <p className="dashboard-card-highlight">
                  Booking request submitted
                </p>

                <p>
                  Your booking information is available here. Check your
                  selected room and current booking details.
                </p>

                <Link
                  to={bookedRoom ? "/rooms/" + bookedRoom.id : "/rooms"}
                  className="dashboard-action dashboard-action-secondary"
                >
                  View Booking
                  <ArrowRight size={17} />
                </Link>
              </>
            ) : (
              <>
                <p className="dashboard-card-highlight">
                  No booking yet
                </p>

                <p>
                  Select a room and send an enquiry to start your booking
                  process.
                </p>

                <Link
                  to="/rooms"
                  className="dashboard-action dashboard-action-secondary"
                >
                  Choose a Room
                  <ArrowRight size={17} />
                </Link>
              </>
            )}
          </div>

          {/* CONTACT OWNER */}
          <a
            href={"tel:" + pgInfo.phone}
            className="dashboard-card dashboard-contact-card"
          >
            <div className="dashboard-card-top">
              <div className="dashboard-icon dashboard-icon-contact">
                <Phone size={22} />
              </div>

              <span className="dashboard-card-tag">
                SUPPORT
              </span>
            </div>

            <h2>Contact Owner</h2>

            <p>
              Need help with room availability, booking or anything related
              to your stay? Contact the owner directly.
            </p>

            <span className="dashboard-action dashboard-action-secondary">
              Call Owner
              <ArrowRight size={17} />
            </span>
          </a>

        </section>

        {/* ACCOUNT */}
        <section className="dashboard-account">
          <div className="dashboard-account-heading">
            <div>
              <span className="section-label">ACCOUNT</span>
              <h2>Account Information</h2>
            </div>

            <ShieldCheck size={25} />
          </div>

          <div className="account-info-grid">
            <div>
              <span>NAME</span>
              <strong>{customer.name}</strong>
            </div>

            <div>
              <span>EMAIL</span>
              <strong>{customer.email}</strong>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

export default Dashboard;


