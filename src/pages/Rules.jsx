import {
  ArrowLeft,
  ShieldCheck,
  Clock,
  Users,
  CigaretteOff,
  Ban,
  CheckCircle2,
} from "lucide-react";
import BackButton from "../components/BackButton";
import { pgInfo } from "../data/pgData";

function Rules() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <section className="bg-[var(--color-navy)] py-16 text-white">
        <div className="container-main">
          <BackButton />

          <div className="mt-8 max-w-3xl">
            <div className="section-label text-[var(--color-gold)]">
              <ShieldCheck size={16} />
              VR Luxury PG
            </div>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              House Rules
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              A few simple rules help us maintain a peaceful, clean and
              comfortable environment for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <RuleHighlight
              icon={<ShieldCheck size={22} />}
              title="Safety First"
              text="Security and peaceful residential living are important to us."
            />

            <RuleHighlight
              icon={<Clock size={22} />}
              title="Flexible Timings"
              text="Residents may have different work and duty schedules."
            />

            <RuleHighlight
              icon={<Users size={22} />}
              title="Respect Others"
              text="Please avoid activities that disturb other residents."
            />
          </div>

          <div className="mt-10">
            <div className="mb-6">
              <p className="section-label">Important Guidelines</p>

              <h2 className="section-title">
                Please follow these rules
              </h2>

              <p className="section-description">
                These guidelines help keep VR Luxury PG comfortable for all
                residents.
              </p>
            </div>

            <div className="space-y-4">
              {pgInfo.rules.map((rule, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[var(--color-navy)]">
                    <CheckCircle2 size={20} />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-gold)]">
                      Rule {index + 1}
                    </span>

                    <p className="mt-1 leading-7 text-slate-700">
                      {rule}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <Ban
                  size={23}
                  className="text-[var(--color-navy)]"
                />

                <h3 className="text-xl font-bold text-[var(--color-navy)]">
                  Important
                </h3>
              </div>

              <p className="mt-4 leading-7 text-[var(--color-muted)]">
                Smoking and alcohol consumption are not permitted inside the
                PG. Visitors are also restricted at night for security
                reasons.
              </p>
            </div>

            <div className="rounded-3xl bg-[var(--color-navy)] p-7 text-white">
              <div className="flex items-center gap-3">
                <CigaretteOff size={23} className="text-[var(--color-gold)]" />

                <h3 className="text-xl font-bold">
                  Peaceful Environment
                </h3>
              </div>

              <p className="mt-4 leading-7 text-slate-300">
                Residents are requested to respect the household and other
                occupants, especially during sleeping hours.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-[var(--color-gold)]/30 bg-white p-7 text-center">
            <ShieldCheck
              size={32}
              className="mx-auto text-[var(--color-navy)]"
            />

            <h2 className="mt-4 text-2xl font-bold text-[var(--color-navy)]">
              Thank you for cooperating
            </h2>

            <p className="mx-auto mt-2 max-w-xl leading-7 text-[var(--color-muted)]">
              Following these simple rules helps us provide a safe and
              comfortable place for everyone.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function RuleHighlight({ icon, title, text }) {
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

export default Rules;
