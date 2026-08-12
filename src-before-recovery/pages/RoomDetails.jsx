import { Link, useParams, useNavigate } from "react-router-dom";
import { pgInfo } from "../data/pgdata";

function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const room = pgInfo.rooms.find((item) => item.id === id);

  if (!room) {
    return (
      <main className="room-details-page">
        <section className="section-padding">
          <div className="container-main">
            <h1 className="section-title">Room Not Found</h1>
            <Link to="/rooms" className="room-back-link">
              ← Back to Rooms
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const customer = JSON.parse(
    localStorage.getItem("vrCustomer") || "null"
  );

  const handleEnquiry = () => {
    if (!customer) {
      alert("Please login to send a room enquiry.");
      navigate("/login");
      return;
    }

    const enquiry = {
      customerName: customer.name,
      customerEmail: customer.email,
      customerPhone: customer.phone,
      roomId: room.id,
      roomTitle: room.title,
      rent: room.price,
      status: "Enquiry Sent",
      date: new Date().toLocaleDateString("en-IN"),
    };

    localStorage.setItem(
      "vrBooking",
      JSON.stringify(enquiry)
    );

    alert("Room enquiry sent successfully!");
    navigate("/dashboard");
  };

  const message = encodeURIComponent(
    `Good evening, Sir. I would like to enquire about the ${room.title} at VR Luxury PG. Please share the availability and booking details. Thank you.`
  );

  return (
    <main className="room-details-page">
      <section className="section-padding">
        <div className="container-main">

          <Link to="/rooms" className="room-back-link">
            ← Back to Rooms
          </Link>

          <div className="room-details-card">

            <div className="room-details-header">
              <div>
                <span className="section-label">
                  VR LUXURY PG
                </span>

                <h1 className="section-title">
                  {room.title}
                </h1>

                <p className="section-description">
                  Explore the room, facilities, food services, and
                  accommodation options available at VR Luxury PG.
                </p>
              </div>

              <div className="room-status">
                {room.available
                  ? "✓ Available"
                  : "Currently Occupied"}
              </div>
            </div>

            <div className="room-details-info">

              <div className="room-detail-box">
                <span>Monthly Rent</span>
                <strong>
                  ₹{room.price.toLocaleString("en-IN")}
                </strong>
                <small>per month</small>
              </div>

              <div className="room-detail-box">
                <span>Sharing</span>
                <strong>
                  {room.capacity}{" "}
                  {room.capacity === 1
                    ? "Person"
                    : "People"}
                </strong>
              </div>

              <div className="room-detail-box">
                <span>Bathroom</span>
                <strong>{room.bathroom}</strong>
              </div>

              <div className="room-detail-box">
                <span>Balcony</span>
                <strong>{room.balcony}</strong>
              </div>

            </div>

            <div className="room-section">
              <h2>Room Features</h2>

              <div className="room-feature-list">
                {pgInfo.roomFeatures.map(
                  (feature, index) => (
                    <div
                      key={index}
                      className="room-feature"
                    >
                      ✓ {feature}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="room-booking-box">

              <div>
                <h2>Interested in this room?</h2>

                <p>
                  Login to send an enquiry, or contact the
                  owner directly for availability and booking
                  details.
                </p>
              </div>

              <div className="room-booking-actions">

                <button
                  onClick={handleEnquiry}
                  className="room-enquiry"
                  disabled={!room.available}
                >
                  {room.available
                    ? "Send Room Enquiry"
                    : "Currently Unavailable"}
                </button>

                <a
                  href={`https://wa.me/918985260247?text=${message}`}
                  target="_blank"
                  rel="noreferrer"
                  className="room-whatsapp"
                >
                  WhatsApp
                </a>

                <a
                  href="tel:8985260247"
                  className="room-call"
                >
                  Call Owner
                </a>

              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default RoomDetails;
