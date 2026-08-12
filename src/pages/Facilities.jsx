import {
  ArrowLeft,
  Wifi,
  Utensils,
  WashingMachine,
  Droplets,
  Camera,
  Car,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { pgInfo } from "../data/pgData";

function Facilities() {
  const navigate = useNavigate();

  const icons = [
    Wifi,
    Utensils,
    WashingMachine,
    Camera,
    Droplets,
    Car,
  ];

  return (
    <main className="facilities-page">
      <div className="container-main section-padding">

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="back-button"
        >
          <ArrowLeft size={17} />
          Back
        </button>

        <section className="facilities-hero">
          <div>
            <p className="section-label">
              <ShieldCheck size={16} />
              VR Luxury PG
            </p>

            <h1 className="section-title">
              Everything you need for comfortable living.
            </h1>

            <p className="section-description">
              Practical facilities are provided to make everyday life
              comfortable, convenient and secure for our residents.
            </p>
          </div>

          <div className="facilities-hero-badge">
            <ShieldCheck size={28} />
            <div>
              <strong>Comfort & Security</strong>
              <span>Designed for everyday living</span>
            </div>
          </div>
        </section>

        <section className="facilities-grid">
          {pgInfo.facilities.map((facility, index) => {
            const Icon = icons[index] || CheckCircle2;

            return (
              <article className="facility-card-pro" key={facility.title}>

                <div className="facility-icon-pro">
                  <Icon size={23} />
                </div>

                <div className="facility-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h2>{facility.title}</h2>

                <p>{facility.description}</p>

                <div className="facility-included">
                  <CheckCircle2 size={15} />
                  Available for residents
                </div>

              </article>
            );
          })}
        </section>

        <section className="facilities-bottom">
          <div>
            <span>VR LUXURY PG</span>
            <h2>Simple facilities. Better everyday living.</h2>
            <p>
              We focus on the essentials that residents need for a
              comfortable and peaceful stay.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/rooms")}
            className="facilities-rooms-btn"
          >
            Explore Rooms
          </button>
        </section>

      </div>
    </main>
  );
}

export default Facilities;
