import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Phone, Send, User, Mail, MessageSquare } from "lucide-react";
import BackButton from "../components/BackButton";
import { pgInfo } from "../data/pgdata";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const room = pgInfo.rooms.find((item) => item.id === id);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!room) {
    return (
      <main className="min-h-screen bg-[var(--color-cream)]">
        <section className="section-padding">
          <div className="container-main">
            <BackButton />

            <div className="mt-8 rounded-3xl bg-white p-10 text-center shadow-sm">
              <h1 className="text-3xl font-bold text-[var(--color-navy)]">
                Room Not Found
              </h1>

              <Link to="/rooms" className="btn-primary mt-6">
                View All Rooms
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const enquiry = {
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      message,
      roomId: room.id,
      roomTitle: room.title,
      rent: room.price,
      status: "New Enquiry",
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("vrBooking", JSON.stringify(enquiry));

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[var(--color-cream)]">
        <section className="section-padding">
          <div className="container-main">
            <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 text-center shadow-lg sm:p-12">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
                <CheckCircle2
                  size={44}
                  className="text-emerald-600"
                />
              </div>

              <p className="section-label mt-7">
                Enquiry Submitted
              </p>

              <h1 className="mt-2 text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">
                Thank you, {name}!
              </h1>

              <p className="mx-auto mt-4 max-w-lg leading-7 text-[var(--color-muted)]">
                Your enquiry for{" "}
                <strong>{room.title}</strong> has been received.
                The owner can now review your enquiry and contact you.
              </p>

              <div className="mt-7 rounded-2xl bg-slate-50 p-5 text-left">
                <p className="text-xs text-[var(--color-muted)]">
                  Selected Room
                </p>

                <p className="mt-1 font-bold text-[var(--color-navy)]">
                  {room.title}
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  ?{Number(room.price).toLocaleString("en-IN")} / month
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  onClick={() => navigate("/")}
                  className="btn-primary"
                >
                  Back to Home
                </button>

                <Link
                  to="/rooms"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 font-semibold text-[var(--color-navy)] hover:bg-slate-50"
                >
                  View Other Rooms
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <section className="bg-[var(--color-navy)] py-10 text-white">
        <div className="container-main">
          <BackButton />

          <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
            Room Enquiry
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Enquire About Your Room
          </h1>

          <p className="mt-3 max-w-2xl text-slate-300">
            Share your details and the owner can contact you regarding
            availability and booking.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            <div className="h-fit rounded-3xl bg-[var(--color-navy)] p-7 text-white shadow-lg lg:sticky lg:top-24">

              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                Selected Room
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                {room.title}
              </h2>

              <div className="mt-6 border-t border-white/10 pt-6">

                <div className="flex justify-between py-3">
                  <span className="text-slate-400">Monthly Rent</span>
                  <strong>
                    ?{Number(room.price).toLocaleString("en-IN")}
                  </strong>
                </div>

                <div className="flex justify-between py-3">
                  <span className="text-slate-400">Capacity</span>
                  <strong>
                    {room.capacity}{" "}
                    {room.capacity === 1 ? "Person" : "People"}
                  </strong>
                </div>

                <div className="flex justify-between py-3">
                  <span className="text-slate-400">Bathroom</span>
                  <strong>{room.bathroom}</strong>
                </div>

                <div className="flex justify-between py-3">
                  <span className="text-slate-400">Availability</span>
                  <strong className="text-emerald-300">
                    {room.available ? "Available" : "Occupied"}
                  </strong>
                </div>

              </div>

              <div className="mt-6 rounded-2xl bg-white/5 p-5">
                <div className="flex gap-3">
                  <Phone size={20} className="shrink-0 text-[var(--color-gold)]" />

                  <div>
                    <p className="font-semibold">
                      Need help?
                    </p>

                    <a
                      href={"tel:" + pgInfo.phone}
                      className="mt-1 block text-sm text-slate-300 hover:text-white"
                    >
                      Call {pgInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <div className="rounded-3xl bg-white p-7 shadow-lg sm:p-9">

              <div>
                <p className="section-label">
                  Your Details
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[var(--color-navy)]">
                  Send an Enquiry
                </h2>

                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  Please provide accurate contact details so the owner can
                  reach you.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 outline-none transition focus:border-[var(--color-navy)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 outline-none transition focus:border-[var(--color-navy)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      required
                      className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 outline-none transition focus:border-[var(--color-navy)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Message
                  </label>

                  <div className="relative">
                    <MessageSquare
                      size={18}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Any questions or requirements?"
                      rows="5"
                      className="w-full resize-none rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 outline-none transition focus:border-[var(--color-navy)]"
                    />
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
                  Your enquiry will be stored securely on this device for
                  the owner admin panel to review.
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-navy)] px-5 py-4 font-semibold text-white transition hover:opacity-90"
                >
                  Send Enquiry
                  <Send size={18} />
                </button>

              </form>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Booking;


