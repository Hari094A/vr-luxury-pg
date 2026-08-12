import {
  ArrowRight,
  BedDouble,
  Bath,
  Users,
  CheckCircle2,
  XCircle,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { pgInfo } from "../data/pgdata";

function Rooms() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <section className="bg-[var(--color-navy)] py-16 text-white">
        <div className="container-main">
          <BackButton />

          <div className="mt-8 max-w-3xl">
            <div className="section-label text-[var(--color-gold)]">
              <Home size={16} />
              VR Luxury PG
            </div>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Rooms & Sharing
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Choose the sharing option that suits your budget, comfort and
              daily routine.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="mb-10 max-w-2xl">
            <p className="section-label">Accommodation Options</p>

            <h2 className="section-title">
              Find the right room for you.
            </h2>

            <p className="section-description">
              All available sharing options are listed below with their
              monthly rent, capacity and facilities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pgInfo.rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-white p-7 shadow-sm sm:p-9">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="section-label">Need Help?</p>

                <h2 className="mt-2 text-2xl font-bold text-[var(--color-navy)]">
                  Not sure which sharing to choose?
                </h2>

                <p className="mt-2 leading-7 text-[var(--color-muted)]">
                  Contact us and we can help you understand the available
                  options.
                </p>
              </div>

              <a
                href={"tel:" + pgInfo.phone}
                className="btn-primary shrink-0"
              >
                Contact Owner
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function RoomCard({ room }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <BedDouble
          size={64}
          strokeWidth={1.4}
          className="text-[var(--color-navy)]/60 transition duration-300 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[var(--color-navy)] shadow-sm">
          {room.capacity === 1
            ? "Single"
            : room.capacity === 2
            ? "Double"
            : "Triple"}{" "}
          Sharing
        </div>

        <div
          className={
            room.available
              ? "absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700"
              : "absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700"
          }
        >
          {room.available ? (
            <CheckCircle2 size={14} />
          ) : (
            <XCircle size={14} />
          )}

          {room.available ? "Available" : "Currently Occupied"}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[var(--color-navy)]">
          {room.title}
        </h3>

        <div className="mt-3 flex items-end gap-1">
          <span className="text-2xl font-bold text-[var(--color-navy)]">
            ?{Number(room.price).toLocaleString("en-IN")}
          </span>

          <span className="pb-1 text-sm text-[var(--color-muted)]">
            / month
          </span>
        </div>

        <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
          <DetailRow
            icon={<Users size={17} />}
            label="Capacity"
            value={
              room.capacity +
              (room.capacity === 1 ? " Person" : " People")
            }
          />

          <DetailRow
            icon={<Bath size={17} />}
            label="Bathroom"
            value={room.bathroom}
          />

          {room.balcony === "Available" && (
            <DetailRow
              icon={<Home size={17} />}
              label="Balcony"
              value="Available"
            />
          )}
        </div>

        <Link
          to={"/rooms/" + room.id}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-navy)] px-5 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          View Full Details
          <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}

function DetailRow({ icon, label, value }) {
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

export default Rooms;

