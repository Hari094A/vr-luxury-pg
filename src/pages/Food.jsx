import { ArrowLeft, Clock, Utensils, CalendarDays, CheckCircle2 } from "lucide-react";
import BackButton from "../components/BackButton";
import { pgInfo } from "../data/pgdata";

function Food() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <section className="bg-[var(--color-navy)] py-16 text-white">
        <div className="container-main">
          <BackButton />

          <div className="mt-8 max-w-3xl">
            <div className="section-label text-[var(--color-gold)]">
              <Utensils size={16} />
              VR Luxury PG Mess
            </div>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Food & Mess
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Convenient meal timings and a simple food arrangement designed
              for the daily routine of our residents.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-6 md:grid-cols-2">

            <div className="card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-navy)] text-[var(--color-gold)]">
                <Clock size={23} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-[var(--color-navy)]">
                Weekday Timings
              </h2>

              <div className="mt-5 space-y-4">
                <FoodTime title="Morning" time="8:00 AM – 10:00 AM" />
                <FoodTime title="Night" time="8:00 PM – 10:00 PM" />
              </div>
            </div>

            <div className="card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-navy)] text-[var(--color-gold)]">
                <CalendarDays size={23} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-[var(--color-navy)]">
                Weekend Timings
              </h2>

              <div className="mt-5 space-y-4">
                <FoodTime title="Morning" time="Breakfast available" />
                <FoodTime title="Afternoon" time="Lunch available" />
                <FoodTime title="Night" time="Dinner available" />
              </div>
            </div>

          </div>

          <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-gold)] text-[var(--color-navy)]">
                <CheckCircle2 size={23} />
              </div>

              <div>
                <p className="section-label">Resident Convenience</p>

                <h2 className="mt-2 text-2xl font-bold text-[var(--color-navy)]">
                  Late residents are considered
                </h2>

                <p className="mt-3 leading-7 text-[var(--color-muted)]">
                  Food can be kept for residents who arrive late because of
                  work or other genuine commitments. Please avoid disturbing
                  the household after sleeping hours.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-[var(--color-navy)] p-8 text-white">
            <h2 className="text-2xl font-bold">
              Simple and convenient
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              Our food schedule is planned around the routine of students and
              working professionals staying at VR Luxury PG.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function FoodTime({ title, time }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-50 p-4">
      <span className="font-semibold text-[var(--color-navy)]">
        {title}
      </span>

      <span className="text-right text-sm text-[var(--color-muted)]">
        {time}
      </span>
    </div>
  );
}

export default Food;

