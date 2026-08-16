import {
  ArrowRight,
  ShieldCheck,
  Users,
  Building2,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { pgInfo } from "../data/pgdata";

function About() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <section className="bg-[var(--color-navy)] py-16 text-white">
        <div className="container-main">
          <BackButton />

          <div className="mt-8 max-w-4xl">
            <div className="section-label text-[var(--color-gold)]">
              <Building2 size={16} />
              About VR Luxury PG
            </div>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              A comfortable place to live.
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              A clean, comfortable and professionally managed PG
              accommodation for students and working professionals in
              Kharadi, Pune.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="section-label">Who We Are</p>

              <h2 className="section-title">
                Welcome to {pgInfo.shortName}
              </h2>

              <p className="section-description">
                {pgInfo.description}
              </p>

              <p className="mt-5 leading-7 text-[var(--color-muted)]">
                Our focus is on providing residents with a peaceful
                residential environment where cleanliness, security and
                everyday convenience are given importance.
              </p>

              <p className="mt-5 leading-7 text-[var(--color-muted)]">
                Whether you are a student, working professional or someone
                looking for a practical place to stay in Kharadi, our
                different sharing options are designed to suit different
                requirements.
              </p>

              <Link
                to="/rooms"
                className="btn-primary mt-7"
              >
                Explore Rooms
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="rounded-3xl bg-[var(--color-navy)] p-8 text-white shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-gold)] text-[var(--color-navy)]">
                <ShieldCheck size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Safe & Peaceful Living
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {pgInfo.security}
              </p>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-sm text-slate-400">
                  Location
                </p>

                <p className="mt-2 flex gap-2 leading-6">
                  <MapPin
                    size={18}
                    className="mt-1 shrink-0 text-[var(--color-gold)]"
                  />
                  {pgInfo.location}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              icon={<ShieldCheck size={22} />}
              title="Security"
              text="24-hour CCTV surveillance with a disciplined residential environment."
            />

            <InfoCard
              icon={<Users size={22} />}
              title="For Students & Professionals"
              text="Sharing options suitable for different lifestyles and budgets."
            />

            <InfoCard
              icon={<Building2 size={22} />}
              title="Practical Living"
              text="Rooms, food, cleaning and essential facilities for everyday convenience."
            />
          </div>

          <div className="mt-14 rounded-3xl bg-white p-7 shadow-sm sm:p-9">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="section-label">What We Provide</p>

                <h2 className="mt-2 text-2xl font-bold text-[var(--color-navy)]">
                  Everyday essentials
                </h2>
              </div>

              <div className="space-y-4">
                {pgInfo.roomFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-[var(--color-navy)]"
                    />

                    <span className="text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-[var(--color-navy)] p-8 text-center text-white sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Looking for a comfortable place in Kharadi?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">
              Explore our available sharing options and find the room that
              suits your requirements.
            </p>

            <Link
              to="/rooms"
              className="btn-primary mt-7 border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[#c5a86d]"
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

function InfoCard({ icon, title, text }) {
  return (
    <div className="card p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-[var(--color-navy)]">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-[var(--color-navy)]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
        {text}
      </p>
    </div>
  );
}

export default About;




