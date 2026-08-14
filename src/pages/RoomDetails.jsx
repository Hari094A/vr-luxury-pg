import {
  ArrowRight,
  BedDouble,
  Bath,
  Users,
  CheckCircle2,
  XCircle,
  Wallet,
  ShieldCheck,
  Home,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { pgInfo } from "../data/pgdata";

function RoomDetails() {
  const { id } = useParams();

  const room = pgInfo.rooms.find((item) => item.id === id);

  if (!room) {
    return (
      <main className="min-h-screen bg-[var(--color-cream)]">
        <section className="section-padding">
          <div className="container-main">
            <BackButton />

            <div className="mt-10 rounded-3xl bg-white p-10 text-center shadow-sm">
              <XCircle
                size={45}
                className="mx-auto text-red-500"
              />

              <h1 className="mt-5 text-3xl font-bold text-[var(--color-navy)]">
                Room Not Found
              </h1>

              <p className="mt-3 text-[var(--color-muted)]">
                The room you are looking for is not available.
              </p>

              <Link
                to="/rooms"
                className="btn-primary mt-7"
              >
                View All Rooms
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <section className="bg-[var(--color-navy)] py-12 text-white">
        <div className="container-main">
          <BackButton />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              VR Luxury PG
            </span>

            <span
              className={
                room.available
                  ? "flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-300"
                  : "flex items-center gap-2 rounded-full bg-red-500/15 px-4 py-2 text-sm font-semibold text-red-300"
              }
            >
              {room.available ? (
                <CheckCircle2 size={15} />
              ) : (
                <XCircle size={15} />
              )}

              {room.available ? "Currently Available" : "Currently Occupied"}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            {room.title}
          </h1>

          <p className="mt-3 text-lg text-slate-300">
            Comfortable accommodation for{" "}
            {room.capacity}{" "}
            {room.capacity === 1 ? "person" : "people"}.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

            <div>
              <div className="flex min-h-[360px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-sm">
                <div className="text-center">
                  <BedDouble
                    size={90}
                    strokeWidth={1.2}
                    className="mx-auto text-[var(--color-navy)]/60"
                  />

                  <p className="mt-5 text-sm font-medium text-[var(--color-muted)]">
                    Room photos will be added here
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm">
                <p className="section-label">
                  Room Information
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[var(--color-navy)]">
                  What this room includes
                </h2>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <InfoBox
                    icon={<Users size={20} />}
                    title="Capacity"
                    value={
                      room.capacity +
                      (room.capacity === 1 ? " Person" : " People")
                    }
                  />

                  <InfoBox
                    icon={<Bath size={20} />}
                    title="Bathroom"
                    value={room.bathroom}
                  />

                  <InfoBox
                    icon={<Home size={20} />}
                    title="Balcony"
                    value={room.balcony}
                  />

                  <InfoBox
                    icon={<Wallet size={20} />}
                    title="Security Deposit"
                    value={
                      "₹" +
                      Number(pgInfo.deposit.amount).toLocaleString("en-IN")
                    }
                  />
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm">
                <p className="section-label">
                  Included Features
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {pgInfo.roomFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-[var(--color-navy)]"
                      />

                      <span className="text-sm text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside>
              <div className="sticky top-24 rounded-3xl bg-white p-7 shadow-lg">
                <p className="section-label">
                  Monthly Rent
                </p>

                <div className="mt-2">
                  <span className="text-4xl font-bold text-[var(--color-navy)]">
                    ?{Number(room.price).toLocaleString("en-IN")}
                  </span>

                  <span className="ml-2 text-sm text-[var(--color-muted)]">
                    / month
                  </span>
                </div>

                <div className="my-7 border-t border-slate-100" />

                <div className="space-y-4">
                  <SummaryRow
                    icon={<BedDouble size={18} />}
                    label="Sharing"
                    value={room.title}
                  />

                  <SummaryRow
                    icon={<Users size={18} />}
                    label="Capacity"
                    value={
                      room.capacity +
                      (room.capacity === 1 ? " Person" : " People")
                    }
                  />

                  <SummaryRow
                    icon={<Bath size={18} />}
                    label="Bathroom"
                    value={room.bathroom}
                  />

                  <SummaryRow
                    icon={<Wallet size={18} />}
                    label="Deposit"
                    value={
                      "₹" +
                      Number(pgInfo.deposit.amount).toLocaleString("en-IN")
                    }
                  />
                </div>

                <div className="mt-7 rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      size={20}
                      className="mt-0.5 shrink-0 text-[var(--color-navy)]"
                    />

                    <p className="text-sm leading-6 text-slate-600">
                      Security deposit is ₹
                      {Number(pgInfo.deposit.amount).toLocaleString("en-IN")}.
                      Refund conditions are subject to the PG rules.
                    </p>
                  </div>
                </div>

                {room.available ? (
                  <Link
                    to={"/rooms/" + room.id + "/enquire"}
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-navy)] px-5 py-4 font-semibold text-white transition hover:opacity-90"
                  >
                    Enquire About This Room
                    <ArrowRight size={18} />
                  </Link>
                ) : (
                  <button
                    disabled
                    className="mt-7 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-slate-200 px-5 py-4 font-semibold text-slate-500"
                  >
                    Currently Occupied
                    <XCircle size={18} />
                  </button>
                )}

                <Link
                  to="/rooms"
                  className="mt-3 flex w-full items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-[var(--color-navy)] transition hover:bg-slate-50"
                >
                  Compare Other Rooms
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
}

function InfoBox({ icon, title, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-[var(--color-navy)]">
        {icon}
      </div>

      <p className="mt-4 text-xs text-[var(--color-muted)]">
        {title}
      </p>

      <p className="mt-1 font-semibold text-[var(--color-navy)]">
        {value}
      </p>
    </div>
  );
}

function SummaryRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[var(--color-navy)]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-[var(--color-muted)]">
          {label}
        </p>

        <p className="truncate text-sm font-semibold text-slate-700">
          {value}
        </p>
      </div>
    </div>
  );
}

export default RoomDetails;


