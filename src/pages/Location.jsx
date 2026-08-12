import {
  MapPin,
  Navigation,
  Phone,
  ExternalLink,
} from "lucide-react";
import BackButton from "../components/BackButton";
import { pgInfo } from "../data/pgdata";

function Location() {
  const mapQuery = encodeURIComponent(
    "Venkata Ravanaiah Luxury PG, Thuljabhavani Nagar, Lane No. 8, Tulaja Bhawani Nagar, Kharadi, Pune, Maharashtra 411014"
  );

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=" + mapQuery;

  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <section className="bg-[var(--color-navy)] py-16 text-white">
        <div className="container-main">
          <BackButton />

          <div className="mt-8 max-w-3xl">
            <div className="section-label text-[var(--color-gold)]">
              <MapPin size={16} />
              Kharadi, Pune
            </div>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Find Our Location
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Visit Venkata Ravanaiah Luxury PG in Thuljabhavani Nagar,
              Kharadi.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            <div className="space-y-5">
              <div className="card p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-navy)] text-[var(--color-gold)]">
                  <MapPin size={24} />
                </div>

                <p className="section-label mt-6">
                  PG Address
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[var(--color-navy)]">
                  Venkata Ravanaiah Luxury PG
                </h2>

                <p className="mt-4 leading-7 text-[var(--color-muted)]">
                  {pgInfo.location}
                </p>
              </div>

              <div className="card p-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-[var(--color-navy)]">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-[var(--color-muted)]">
                      Contact
                    </p>

                    <a
                      href={"tel:" + pgInfo.phone}
                      className="font-bold text-[var(--color-navy)]"
                    >
                      {pgInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <Navigation size={18} />
                Open in Google Maps
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-200 p-5">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-navy)]">
                    VR Luxury PG
                  </p>

                  <p className="mt-1 text-xs text-[var(--color-muted)]">
                    Thuljabhavani Nagar, Kharadi
                  </p>
                </div>

                <MapPin
                  size={22}
                  className="text-[var(--color-navy)]"
                />
              </div>

              <iframe
                title="VR Luxury PG Location"
                src={
                  "https://www.google.com/maps?q=" +
                  mapQuery +
                  "&output=embed"
                }
                className="h-[450px] w-full border-0 sm:h-[550px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[var(--color-navy)]">
                <MapPin size={21} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-[var(--color-navy)]">
                  Easy to find
                </h2>

                <p className="mt-2 leading-7 text-[var(--color-muted)]">
                  Use the Google Maps button above for directions from your
                  current location. The map can also be opened directly in
                  Google Maps for navigation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Location;

