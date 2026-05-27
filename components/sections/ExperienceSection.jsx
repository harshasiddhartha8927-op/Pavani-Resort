import { motion } from "framer-motion";
import { experiences } from "../../assets/resortData";
import SectionHeading from "../SectionHeading";
import MagneticButton from "../MagneticButton";

export default function ExperienceSection() {
  return (
    <section id="experiences" className="relative overflow-hidden bg-cocoa py-24 md:py-32">
      <div className="absolute inset-0 opacity-45">
        <img
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1900&q=82"
          alt="Warm coastline at sunset"
          className="parallax-image h-[115%] w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,8,0.94),rgba(12,10,8,0.72)_48%,rgba(12,10,8,0.9))]" />

      <div className="section-shell relative z-10 grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <SectionHeading
            eyebrow="Experiences"
            title="One day, sequenced like cinema."
            copy="The resort itinerary moves with the light: water before heat, gardens at noon, rituals by sunset, and fire after dark."
          />
          <div className="mt-9">
            <MagneticButton href="#booking" variant="outline">
              Curate my stay
            </MagneticButton>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-[72px] top-2 hidden h-full w-px origin-top scale-y-0 bg-ambered/50 experience-track md:block" />
          <div className="grid gap-5">
            {experiences.map((experience) => (
              <article
                key={experience.title}
                className="timeline-item glass-panel grid gap-5 p-5 md:grid-cols-[120px_1fr] md:p-7"
              >
                <time className="font-display text-4xl text-ambered">
                  {experience.time}
                </time>
                <div>
                  <h3 className="font-display text-4xl text-linen">
                    {experience.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-champagne/64">
                    {experience.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
