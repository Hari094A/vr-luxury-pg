import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Save,
  LogOut,
  Home,
  Edit3,
  CheckCircle2,
  XCircle,
  BedDouble,
  Users,
  ClipboardList,
  Phone,
  Mail,
  MessageSquare,
  CalendarDays,  Plus,  Trash2,} from "lucide-react";
import { pgInfo } from "../data/pgdata";

const STORAGE_KEY = "vrPgAdminData";

function getData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(pgInfo));
  } catch {
    return JSON.parse(JSON.stringify(pgInfo));
  }
}

function OwnerDashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState(getData);
  const [saved, setSaved] = useState(false);
  const [editingProperty, setEditingProperty] = useState(false);

  const enquiry = (() => {
    try {
      return JSON.parse(localStorage.getItem("vrBooking") || "null");
    } catch {
      return null;
    }
  })();

  useEffect(() => {
    if (localStorage.getItem("vrOwnerLoggedIn") !== "true") {
      navigate("/owner-login");
    }
  }, [navigate]);

  const updateProperty = (key, value) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const updateRoom = (id, key, value) => {
    setData((prev) => ({
      ...prev,
      rooms: prev.rooms.map((room) =>
        room.id === id
          ? {
              ...room,
              [key]:
                key === "price" || key === "capacity"
                  ? Number(value)
                  : value,
            }
          : room
      ),
    }));
  };

  const addRoom = () => {
    const newRoom = {
      id: `room-${Date.now()}`,
      title: "New Room",
      price: 0,
      period: "month",
      bathroom: "Combined bathroom",
      balcony: "Available",
      capacity: 1,
      available: true,
    };

    setData((prev) => ({
      ...prev,
      rooms: [...prev.rooms, newRoom],
    }));
  };

  const deleteRoom = (id) => {
    setData((prev) => ({
      ...prev,
      rooms: prev.rooms.filter((room) => room.id !== id),
    }));
  };

  const toggleAvailability = (id) => {
    setData((prev) => ({
      ...prev,
      rooms: prev.rooms.map((room) =>
        room.id === id
          ? { ...room, available: !room.available }
          : room
      ),
    }));
  };

  const saveChanges = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const resetChanges = () => {
    const fresh = JSON.parse(JSON.stringify(pgInfo));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    setData(fresh);
    setSaved(false);
  };

  const logout = () => {
    localStorage.removeItem("vrOwnerLoggedIn");
    navigate("/owner-login");
  };

  const availableRooms = data.rooms.filter((room) => room.available).length;
  const totalBeds = data.rooms.reduce((sum, room) => sum + Number(room.capacity || 0), 0);
  const availableBeds = data.rooms.filter((room) => room.available).reduce((sum, room) => sum + Number(room.capacity || 0), 0);
  const occupiedRooms = data.rooms.length - availableRooms;

  return (
    <main className="owner-dashboard-edit">
      <div className="owner-admin-shell">

        <header className="owner-admin-header">
          <div className="owner-admin-brand">
            <div className="owner-admin-logo">VR</div>

            <div>
              <strong>VR LUXURY PG</strong>
              <span>OWNER ADMIN PANEL</span>
            </div>
          </div>

          <div className="owner-admin-actions">
            <a href="/" className="owner-view-site">
              <Home size={17} />
              View Website
            </a>

            <button onClick={logout} className="owner-admin-logout">
              <LogOut size={17} />
              Logout
            </button>
          </div>
        </header>

        <section className="owner-admin-welcome">
          <div>
            <span className="owner-admin-label">
              <CheckCircle2 size={15} />
              OWNER ACCESS
            </span>

            <h1>Manage Your PG</h1>

            <p>
              Edit property information, room details and availability
              from this dashboard.
            </p>
          </div>

          <button
            className="owner-save-main"
            onClick={saveChanges}
          >
            <Save size={18} />
            {saved ? "Changes Saved" : "Save All Changes"}
          </button>
        </section>

        <section className="owner-admin-stats">

          <div className="owner-edit-stat">
            <BedDouble size={21} />
            <div>
              <span>Total Rooms</span>
              <strong>{data.rooms.length}</strong>
            </div>
          </div>

          <div className="owner-edit-stat">
            <CheckCircle2 size={21} />
            <div>
              <span>Available</span>
              <strong>{availableRooms}</strong>
            </div>
          </div>

          <div className="owner-edit-stat">
            <XCircle size={21} />
            <div>
              <span>Occupied</span>
              <strong>{occupiedRooms}</strong>
            </div>
          </div>

          <div className="owner-edit-stat">
            <Users size={21} />
            <div>
              <span>Customers</span>
              <strong>
                {localStorage.getItem("vrCustomer") ₹ 1 : 0}
              </strong>
            </div>
          </div>

        </section>

        <section className="owner-edit-panel">

          <div className="owner-edit-heading">
            <div>
              <span>PROPERTY INFORMATION</span>
              <h2>PG Details</h2>
              <p>Update the information displayed to customers.</p>
            </div>

            <button
              className="edit-toggle-btn"
              onClick={() => setEditingProperty(!editingProperty)}
            >
              <Edit3 size={16} />
              {editingProperty ? "Done Editing" : "Edit Details"}
            </button>
          </div>

          <div className="owner-property-grid">

            <label>
              PG Name
              <input
                disabled={!editingProperty}
                value={data.name}
                onChange={(e) =>
                  updateProperty("name", e.target.value)
                }
              />
            </label>

            <label>
              Short Name
              <input
                disabled={!editingProperty}
                value={data.shortName}
                onChange={(e) =>
                  updateProperty("shortName", e.target.value)
                }
              />
            </label>

            <label className="wide-field">
              Location
              <input
                disabled={!editingProperty}
                value={data.location}
                onChange={(e) =>
                  updateProperty("location", e.target.value)
                }
              />
            </label>

            <label>
              Phone
              <input
                disabled={!editingProperty}
                value={data.phone}
                onChange={(e) =>
                  updateProperty("phone", e.target.value)
                }
              />
            </label>

            <label>
              Deposit
              <input
                type="number"
                disabled={!editingProperty}
                value={data.deposit.amount}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    deposit: {
                      ...prev.deposit,
                      amount: Number(e.target.value),
                    },
                  }))
                }
              />
            </label>

          </div>

        </section>

        <section className="owner-edit-panel">

          <div className="owner-edit-heading">
            <div>
              <span>ROOM MANAGEMENT</span>
              <h2>Rooms & Availability</h2>
              <p>
                Edit room information and click availability to change
                the current room status.
              </p>
            </div>
          </div>

          <div className="editable-room-list">

            {data.rooms.map((room) => (
              <div className="editable-room-card" key={room.id}>

                <div className="editable-room-icon">
                  <BedDouble size={22} />
                </div>

                <div className="editable-room-fields">

                  <label>
                    Room Name
                    <input
                      value={room.title}
                      onChange={(e) =>
                        updateRoom(
                          room.id,
                          "title",
                          e.target.value
                        )
                      }
                    />
                  </label>

                  <label>
                    Monthly Rent
                    <input
                      type="number"
                      value={room.price}
                      onChange={(e) =>
                        updateRoom(
                          room.id,
                          "price",
                          e.target.value
                        )
                      }
                    />
                  </label>

                  <label>
                    Capacity
                    <input
                      type="number"
                      min="1"
                      value={room.capacity}
                      onChange={(e) =>
                        updateRoom(
                          room.id,
                          "capacity",
                          e.target.value
                        )
                      }
                    />
                  </label>

                  <label>
                    Bathroom
                    <input
                      value={room.bathroom}
                      onChange={(e) =>
                        updateRoom(
                          room.id,
                          "bathroom",
                          e.target.value
                        )
                      }
                    />
                  </label>

                </div>

                <button
                  className={
                    room.available
                      ? "room-availability available"
                      : "room-availability occupied"
                  }
                  onClick={() => toggleAvailability(room.id)}
                  title="Click to change availability"
                >
                  {room.available ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    <XCircle size={16} />
                  )}

                  {room.available ? "Available" : "Occupied"}
                </button>

              </div>
            ))}

          </div>

        </section>

        <section className="owner-edit-panel">

          <div className="owner-edit-heading">
            <div>
              <span>CUSTOMER ACTIVITY</span>
              <h2>Latest Enquiry</h2>
            </div>

            <ClipboardList size={22} />
          </div>

          {enquiry ? (
            <div className="owner-enquiry-edit">

              <div className="owner-enquiry-main">

                <div className="owner-enquiry-avatar">
                  {enquiry.customerName
                    ? enquiry.customerName.charAt(0).toUpperCase()
                    : "C"}
                </div>

                <div className="owner-enquiry-customer">
                  <strong>{enquiry.customerName}</strong>

                  <span>
                    <Mail size={14} />
                    {enquiry.customerEmail}
                  </span>

                  <span>
                    <Phone size={14} />
                    {enquiry.customerPhone}
                  </span>
                </div>

              </div>

              <div className="owner-enquiry-room">

                <span className="owner-enquiry-small-label">
                  SELECTED ROOM
                </span>

                <strong>{enquiry.roomTitle}</strong>

                <span>
                  ?{Number(enquiry.rent).toLocaleString("en-IN")}/month
                </span>

              </div>

              <div className="owner-enquiry-message">

                <span className="owner-enquiry-small-label">
                  CUSTOMER MESSAGE
                </span>

                <p>
                  {enquiry.message || "No message provided."}
                </p>

              </div>

              <div className="owner-enquiry-date">

                <CalendarDays size={16} />

                <span>
                  {enquiry.createdAt
                    ? new Date(enquiry.createdAt).toLocaleString("en-IN")
                    : "Date not available"}
                </span>

              </div>

              <div className="owner-enquiry-footer">

                <div className="enquiry-status-edit">
                  <CheckCircle2 size={15} />
                  {enquiry.status || "New Enquiry"}
                </div>

                <div className="enquiry-action-buttons">

                  <button
                    type="button"
                    className="enquiry-accept-btn"
                    onClick={() => {
                      const updated = {
                        ...enquiry,
                        status: "Accepted",
                      };

                      localStorage.setItem(
                        "vrBooking",
                        JSON.stringify(updated)
                      );

                      window.location.reload();
                    }}
                  >
                    <CheckCircle2 size={16} />
                    Accept Booking
                  </button>

                  <button
                    type="button"
                    className="enquiry-decline-btn"
                    onClick={() => {
                      const updated = {
                        ...enquiry,
                        status: "Declined",
                      };

                      localStorage.setItem(
                        "vrBooking",
                        JSON.stringify(updated)
                      );

                      window.location.reload();
                    }}
                  >
                    <XCircle size={16} />
                    Decline
                  </button>

                </div>

                <a
                  href={"tel:" + enquiry.customerPhone}
                  className="owner-enquiry-call"
                >
                  <Phone size={16} />
                  Call Customer
                </a>

              </div>

            </div>
          ) : (
            <div className="owner-no-enquiry">

              <ClipboardList size={25} />

              <strong>No customer enquiries yet</strong>

              <span>
                New enquiries submitted by customers will appear here.
              </span>

            </div>
          )}

        </section>

        <div className="owner-bottom-actions">
          <button onClick={saveChanges} className="owner-save-bottom">
            <Save size={17} />
            {saved ? "Saved Successfully" : "Save Changes"}
          </button>

          <button onClick={resetChanges} className="owner-reset-btn">
            Reset to Original Data
          </button>
        </div>

        <footer className="owner-admin-footer">
          <span>© 2026 VR Luxury PG</span>
          <span>Owner Administration Panel</span>
        </footer>

      </div>
    </main>
  );
}

export default OwnerDashboard;












