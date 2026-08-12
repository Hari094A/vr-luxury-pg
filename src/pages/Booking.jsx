import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone,
  User,
  Mail,
  CalendarDays,
  CreditCard,
  Smartphone,
  Landmark,
  ShieldCheck,
  Wallet,
  Users,
  Bath,
  XCircle,
} from "lucide-react";
import BackButton from "../components/BackButton";
import { pgInfo } from "../data/pgData";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const room = pgInfo.rooms.find((item) => item.id === id);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [moveInDate, setMoveInDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  if (!room) {
    return (
      <main className="min-h-screen bg-[var(--color-cream)]">
        <section className="section-padding">
          <div className="container-main">
            <BackButton />

            <div className="mt-8 rounded-3xl bg-white p-10 text-center shadow-sm">
              <XCircle size={45} className="mx-auto text-red-500" />

              <h1 className="mt-5 text-3xl font-bold text-[var(--color-navy)]">
                Room Not Found
              </h1>

              <p className="mt-3 text-[var(--color-muted)]">
                The room you selected is no longer available.
              </p>

              <Link to="/rooms" className="btn-primary mt-6">
                View All Rooms
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const rent = Number(room.price || 0);
  const deposit = Number(pgInfo.deposit?.amount || 2000);
  const total = rent + deposit;

  const continueToPayment = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !moveInDate) {
      return;
    }

    setStep(2);
  };

  const confirmBooking = () => {
    if (!paymentMethod) return;

    const booking = {
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      moveInDate,
      paymentMethod,
      roomId: room.id,
      roomTitle: room.title,
      rent,
      deposit,
      totalAmount: total,
      paymentStatus: "Payment Pending",
      status: "Booking Request",
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("vrBooking", JSON.stringify(booking));

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[var(--color-cream)]">
        <section className="section-padding">
          <div className="container-main">
            <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 text-center shadow-xl sm:p-12">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
                <CheckCircle2 size={45} className="text-emerald-600" />
              </div>

              <p className="section-label mt-7">
                Booking Request Created
              </p>

              <h1 className="mt-2 text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">
                Thank you, {name}!
              </h1>

              <p className="mx-auto mt-4 max-w-lg leading-7 text-[var(--color-muted)]">
                Your booking request for{" "}
                <strong>{room.title}</strong> has been submitted successfully.
              </p>

              <div className="mt-8 space-y-3 rounded-2xl bg-slate-50 p-5 text-left">
                <SummaryLine label="Room" value={room.title} />
                <SummaryLine
                  label="Monthly Rent"
                  value={"₹" + rent.toLocaleString("en-IN")}
                />
                <SummaryLine
                  label="Security Deposit"
                  value={"₹" + deposit.toLocaleString("en-IN")}
                />
                <SummaryLine
                  label="Move-in Date"
                  value={moveInDate}
                />
                <SummaryLine
                  label="Payment Method"
                  value={paymentMethod}
                />
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
                Payment gateway connection will be added before accepting real
                payments. Your booking is currently recorded as{" "}
                <strong>Payment Pending</strong>.
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
            VR Luxury PG · Booking
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Book Your Room
          </h1>

          <p className="mt-3 max-w-2xl text-slate-300">
            Complete your details and choose your preferred payment method.
          </p>

          <div className="mt-7 flex max-w-xl items-center gap-3">
            <Step active={step >= 1} number="1" label="Your Details" />
            <div className="h-px flex-1 bg-white/20" />
            <Step active={step >= 2} number="2" label="Payment" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="h-fit rounded-3xl bg-[var(--color-navy)] p-7 text-white shadow-xl lg:sticky lg:top-24">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                Selected Room
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                {room.title}
              </h2>

              <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
                <SummaryDark
                  icon={<Wallet size={18} />}
                  label="Monthly Rent"
                  value={"₹" + rent.toLocaleString("en-IN")}
                />

                <SummaryDark
                  icon={<Users size={18} />}
                  label="Capacity"
                  value={
                    room.capacity +
                    (room.capacity === 1 ? " Person" : " People")
                  }
                />

                <SummaryDark
                  icon={<Bath size={18} />}
                  label="Bathroom"
                  value={room.bathroom}
                />

                <SummaryDark
                  icon={<ShieldCheck size={18} />}
                  label="Security Deposit"
                  value={"₹" + deposit.toLocaleString("en-IN")}
                />
              </div>

              <div className="mt-7 rounded-2xl bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <Phone
                    size={19}
                    className="mt-1 shrink-0 text-[var(--color-gold)]"
                  />

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
            </aside>

            <div className="rounded-3xl bg-white p-7 shadow-xl sm:p-9">
              {step === 1 ? (
                <form onSubmit={continueToPayment}>
                  <p className="section-label">
                    Step 1
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-[var(--color-navy)]">
                    Your Details
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                    Enter your details to continue to payment.
                  </p>

                  <div className="mt-8 space-y-5">
                    <InputField
                      icon={<User size={18} />}
                      label="Full Name"
                      type="text"
                      value={name}
                      onChange={setName}
                      placeholder="Enter your full name"
                    />

                    <InputField
                      icon={<Mail size={18} />}
                      label="Email Address"
                      type="email"
                      value={email}
                      onChange={setEmail}
                      placeholder="you@example.com"
                    />

                    <InputField
                      icon={<Phone size={18} />}
                      label="Phone Number"
                      type="tel"
                      value={phone}
                      onChange={setPhone}
                      placeholder="Enter your phone number"
                    />

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Move-in Date
                      </label>

                      <div className="relative">
                        <CalendarDays
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          type="date"
                          value={moveInDate}
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) => setMoveInDate(e.target.value)}
                          required
                          className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 outline-none transition focus:border-[var(--color-navy)]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl bg-slate-50 p-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">
                        Monthly Rent
                      </span>
                      <strong className="text-slate-800">
                        ₹{rent.toLocaleString("en-IN")}
                      </strong>
                    </div>

                    <div className="mt-3 flex justify-between text-sm">
                      <span className="text-slate-500">
                        Security Deposit
                      </span>
                      <strong className="text-slate-800">
                        ₹{deposit.toLocaleString("en-IN")}
                      </strong>
                    </div>

                    <div className="my-4 border-t border-slate-200" />

                    <div className="flex justify-between">
                      <span className="font-semibold text-[var(--color-navy)]">
                        Initial Amount
                      </span>
                      <strong className="text-xl text-[var(--color-navy)]">
                        ₹{total.toLocaleString("en-IN")}
                      </strong>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-navy)] px-5 py-4 font-semibold text-white transition hover:opacity-90"
                  >
                    Continue to Payment
                    <ArrowRight size={18} />
                  </button>
                </form>
              ) : (
                <div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)]"
                  >
                    <ArrowLeft size={17} />
                    Back to Details
                  </button>

                  <p className="section-label">
                    Step 2
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-[var(--color-navy)]">
                    Choose Payment Method
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                    Select how you would like to pay your initial booking
                    amount.
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-3">
                    <PaymentOption
                      icon={<Smartphone size={24} />}
                      title="UPI"
                      subtitle="Google Pay / PhonePe"
                      selected={paymentMethod === "UPI"}
                      onClick={() => setPaymentMethod("UPI")}
                    />

                    <PaymentOption
                      icon={<CreditCard size={24} />}
                      title="Card"
                      subtitle="Debit / Credit Card"
                      selected={paymentMethod === "Card"}
                      onClick={() => setPaymentMethod("Card")}
                    />

                    <PaymentOption
                      icon={<Landmark size={24} />}
                      title="Net Banking"
                      subtitle="Bank transfer"
                      selected={paymentMethod === "Net Banking"}
                      onClick={() => setPaymentMethod("Net Banking")}
                    />
                  </div>

                  <div className="mt-7 rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-700">
                      Payment Summary
                    </p>

                    <div className="mt-4 space-y-3 text-sm">
                      <SummaryLine
                        label="Monthly Rent"
                        value={"₹" + rent.toLocaleString("en-IN")}
                      />

                      <SummaryLine
                        label="Security Deposit"
                        value={"₹" + deposit.toLocaleString("en-IN")}
                      />

                      <div className="border-t border-slate-200 pt-3">
                        <SummaryLine
                          label="Total"
                          value={"₹" + total.toLocaleString("en-IN")}
                          strong
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                    <ShieldCheck
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <p className="text-sm leading-6 text-blue-800">
                      Your selected payment method is saved with the booking.
                      Real payment processing will be connected through a
                      secure payment gateway before accepting live payments.
                    </p>
                  </div>

                  <button
                    type="button"
                    disabled={!paymentMethod}
                    onClick={confirmBooking}
                    className={
                      paymentMethod
                        ? "mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-navy)] px-5 py-4 font-semibold text-white transition hover:opacity-90"
                        : "mt-7 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-slate-200 px-5 py-4 font-semibold text-slate-400"
                    }
                  >
                    Confirm Booking · ₹{total.toLocaleString("en-IN")}
                    <CheckCircle2 size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Step({ active, number, label }) {
  return (
    <div
      className={
        active
          ? "flex items-center gap-2 text-sm font-semibold text-white"
          : "flex items-center gap-2 text-sm text-slate-400"
      }
    >
      <span
        className={
          active
            ? "flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--color-navy)]"
            : "flex h-8 w-8 items-center justify-center rounded-full border border-white/20"
        }
      >
        {number}
      </span>
      <span>{label}</span>
    </div>
  );
}

function InputField({
  icon,
  label,
  type,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </span>

        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required
          className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 outline-none transition focus:border-[var(--color-navy)]"
        />
      </div>
    </div>
  );
}

function PaymentOption({
  icon,
  title,
  subtitle,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        selected
          ? "rounded-2xl border-2 border-[var(--color-navy)] bg-slate-50 p-5 text-left shadow-sm"
          : "rounded-2xl border-2 border-slate-200 bg-white p-5 text-left transition hover:border-slate-400"
      }
    >
      <div
        className={
          selected
            ? "flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-navy)] text-white"
            : "flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-[var(--color-navy)]"
        }
      >
        {icon}
      </div>

      <p className="mt-4 font-bold text-[var(--color-navy)]">
        {title}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {subtitle}
      </p>
    </button>
  );
}

function SummaryDark({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-[var(--color-gold)]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-slate-400">{label}</p>
        <p className="truncate text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
}

function SummaryLine({ label, value, strong = false }) {
  return (
    <div className="flex justify-between gap-4">
      <span className={strong ? "font-semibold text-[var(--color-navy)]" : "text-slate-500"}>
        {label}
      </span>

      <strong
        className={
          strong
            ? "text-xl text-[var(--color-navy)]"
            : "text-slate-800"
        }
      >
        {value}
      </strong>
    </div>
  );
}

export default Booking;
