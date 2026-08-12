import {
  ArrowRight,
  ShieldCheck,
  Wifi,
  Utensils,
  WashingMachine,
  Droplets,
  Camera,
  MapPin,
  Phone,
  CheckCircle2,
} from "lucide-react";

import { pgInfo } from "../data/pgdata";

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <div className="container-main grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
          <div className="max-w-2xl">
            <div className="section-label text-[var(--color-gold)]">
              <ShieldCheck size={16} />
              Trusted PG Accommodation in Kharadi
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              A comfortable place to live.
              <span className="mt-2 block text-[var(--color-gold)]">
                A place you can trust.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Welcome to{" "}
              <strong className="text-white">
                Venkata Ravanaiah Luxury PG
              </strong>
              . Clean, comfortable and professionally managed accommodation
              for students and working professionals in Kharadi, Pune.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/rooms"
                className="btn-primary border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[#c5a86d]"
              >
                Check Available Rooms
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+918985260247"
                className="btn-secondary border-slate-600 bg-transparent text-white hover:border-white hover:bg-white/10"
              >
                <Phone size={17} />
                Call Now
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-7">
              <div>
                <p className="text-xl font-bold text-white">24/7</p>
                <p className="mt-1 text-xs text-slate-400">
                  CCTV Surveillance
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-white">Wi-Fi</p>
                <p className="mt-1 text-xs text-slate-400">
                  Room Connectivity
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-white">Daily</p>
                <p className="mt-1 text-xs text-slate-400">
                  Cleaning
                </p>
              </div>
            </div>
          </div>

          {/* Temporary property image area */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-slate-800 shadow-2xl">
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950 p-8 text-center">
                <div>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-2xl font-bold text-white backdrop-blur">
                    VR
                  </div>

                  <p className="mt-6 text-lg font-semibold text-white">
                    Venkata Ravanaiah Luxury PG
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Property photos will be added here
                  </p>

                  <p className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
                    <MapPin size={14} />
                    Kharadi, Pune
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-padding bg-[var(--color-cream)]">
        <div className="container-main grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="section-label">Why VR Luxury PG</p>

            <h2 className="section-title">
              Designed for peaceful everyday living.
            </h2>

            <p className="section-description">
              Our PG is located in a residential society environment in
              Kharadi, giving residents a practical place to stay while
              keeping cleanliness, discipline and security in focus.
            </p>

            <a
              href="/about"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--color-navy)]"
            >
              Learn more about us
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureCard
              icon={<ShieldCheck size={22} />}
              title="Security"
              description="24-hour CCTV surveillance and a disciplined residential environment."
            />

            <FeatureCard
              icon={<Wifi size={22} />}
              title="Reliable Wi-Fi"
              description="Wi-Fi is available across the rooms with good connectivity."
            />

            <FeatureCard
              icon={<CheckCircle2 size={22} />}
              title="Daily Cleaning"
              description="Regular cleaning helps maintain a neat and comfortable living space."
            />

            <FeatureCard
              icon={<Droplets size={22} />}
              title="Purified Water"
              description="Fresh purified drinking water with hot, cold and normal water options."
            />
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="rooms-explore-home">

            <div className="rooms-explore-icon">
              <span>VR</span>
            </div>

            <div className="rooms-explore-content">
              <p className="section-label">
                Accommodation
              </p>

              <h2 className="section-title">
                Find the right room for you.
              </h2>

              <p className="section-description">
                Explore our comfortable sharing options, from private
                rooms to double, triple and hall + kitchen bed sharing.
                Choose the option that best fits your comfort and budget.
              </p>

              <div className="rooms-explore-highlights">
                <span>Single Sharing</span>
                <span>Double Sharing</span>
                <span>Triple Sharing</span>
                <span>Hall + Kitchen</span>
              </div>

              <a
                href="/rooms"
                className="rooms-explore-btn"
              >
                Explore Rooms
                <ArrowRight size={18} />
              </a>
            </div>

          </div>
        </div>
      </section>
      {/* FACILITIES */}
      <section className="section-padding bg-[var(--color-cream)]">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="section-label">Facilities</p>

            <h2 className="section-title">
              The essentials are taken care of.
            </h2>

            <p className="section-description">
              Practical facilities designed to make everyday living easier
              and more comfortable.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FacilityItem
              icon={<Wifi />}
              title="Wi-Fi"
              text="Good Wi-Fi connectivity available in the rooms."
            />

            <FacilityItem
              icon={<Utensils />}
              title="Food / Mess"
              text="Morning and night meals on weekdays, with additional afternoon meals on weekends."
            />

            <FacilityItem
              icon={<WashingMachine />}
              title="Washing Machine"
              text="Washing machine facility available for residents."
            />

            <FacilityItem
              icon={<Camera />}
              title="24/7 CCTV"
              text="CCTV surveillance is available throughout the PG."
            />

            <FacilityItem
              icon={<Droplets />}
              title="Purified Water"
              text="Hot, cold and normal purified drinking water."
            />

            <FacilityItem
              icon={<ShieldCheck />}
              title="Residential Area"
              text="Located in a society environment surrounded by families."
            />
          </div>
        </div>
      </section>

      {/* FOOD */}
      <section className="section-padding bg-[var(--color-navy)]">
        <div className="container-main grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-label text-[var(--color-gold)]">
              Food & Mess
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Simple, convenient meal timings for residents.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Food is available according to the PG schedule, with meals
              provided on weekdays and additional afternoon service on
              weekends.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-gold)] text-[var(--color-navy)]">
                <Utensils size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Regular food timings
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Morning: 8:00 AM – 10:00 AM
                  <br />
                  Night: 8:00 PM – 10:00 PM
                  <br />
                  Saturday & Sunday: Morning, afternoon and night.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION / CTA */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="overflow-hidden rounded-3xl bg-[var(--color-cream)]">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <p className="section-label">Location</p>

                <h2 className="section-title">
                  Stay close to where life happens.
                </h2>

                <p className="mt-5 flex gap-3 leading-7 text-[var(--color-muted)]">
                  <MapPin
                    className="mt-1 shrink-0 text-[var(--color-navy)]"
                    size={20}
                  />
                  {pgInfo.location}
                </p>

                <a
                  href="/location"
                  className="btn-primary mt-7"
                >
                  View Location
                  <ArrowRight size={17} />
                </a>
              </div>

              <div className="flex min-h-[300px] items-center justify-center bg-slate-100 p-8">
                <div className="text-center">
                  <MapPin
                    size={42}
                    className="mx-auto text-[var(--color-navy)]"
                  />

                  <p className="mt-4 font-semibold text-[var(--color-navy)]">
                    Kharadi, Pune
                  </p>

                  <p className="mt-2 text-sm text-[var(--color-muted)]">
                    Interactive map will be added here.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[var(--color-navy)] p-7 text-center sm:p-9 md:flex-row md:text-left">
            <div>
              <h3 className="text-xl font-bold text-white">
                Looking for a room?
              </h3>

              <p className="mt-1 text-sm text-slate-300">
                Check current options and choose the sharing that suits you.
              </p>
            </div>

            <a
              href="/rooms"
              className="btn-primary shrink-0 border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[#c5a86d]"
            >
              Check Availability
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="card p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-[var(--color-navy)]">
        {icon}
      </div>

      <h3 className="mt-5 font-semibold text-[var(--color-navy)]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
        {description}
      </p>
    </div>
  );
}

function RoomCard({ room }) {
  return (
    <article className="card overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-48 items-center justify-center bg-slate-100">
        <div className="text-center">
          <p className="text-3xl font-bold text-[var(--color-navy)]">VR</p>
          <p className="mt-1 text-xs text-[var(--color-muted)]">
            Property photo coming soon
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-[var(--color-navy)]">
              {room.title}
            </h3>

            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Up to {room.capacity} {room.capacity === 1 ? "person" : "people"}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xl font-bold text-[var(--color-navy)]">
              ₹{room.price.toLocaleString("en-IN")}
            </p>

            <p className="text-xs text-[var(--color-muted)]">per month</p>
          </div>
        </div>

        <div className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-sm text-slate-600">
          <p className="flex items-center gap-2">
            <CheckCircle2 size={16} />
            {room.bathroom}
          </p>

          {room.balcony === "Available" && (
            <p className="flex items-center gap-2">
              <CheckCircle2 size={16} />
              Balcony available
            </p>
          )}
        </div>

        <a
          href={`/rooms/${room.id}`}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-sm font-semibold text-[var(--color-navy)] transition hover:border-[var(--color-navy)] hover:bg-slate-50"
        >
          View Room
          <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}

function FacilityItem({ icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[var(--color-navy)]">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-[var(--color-navy)]">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Home;

