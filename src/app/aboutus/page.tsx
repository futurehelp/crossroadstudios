import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Crossroad Studios engineers and discover our mission for Arkansas musicians.",
};

export default function AboutPage() {
  return (
    <>
      <section className="about-hero" aria-label="Crossroad Studios recording sign">
        <div className="hero-sheen" aria-hidden="true" />
        <Reveal className="about-hero-label" y={24}>
          <p className="eyebrow">About Crossroad Studios</p>
        </Reveal>
      </section>

      <section className="about-intro" aria-labelledby="about-title">
        <Reveal>
          <h1 id="about-title" className="sr-only">
            About Crossroad Studios
          </h1>
          <p>
            Showcase your talent in the perfect setting. Our experienced
            engineers are here to bring your musical vision to life with
            top-notch quality. Let&apos;s create magic together!
          </p>
          <p>
            Our aims are to provide musicians in Arkansas the platform to
            translate their passions into high quality recordings and to
            create and nurture a community of artists in our area.
          </p>
          <p>
            Unleash your creativity in the heart of Arkansas. Elevate your
            music and let your sound be heard. The studio where dreams become
            reality.
          </p>
        </Reveal>
      </section>

      <section className="team-section" aria-label="Our team">
        <Reveal className="team-row">
          <div className="team-portrait">
            <Image
              src="/images/kristofer.webp"
              alt="Kristofer Freeland playing guitar"
              fill
              sizes="(max-width: 767px) 78vw, 420px"
            />
          </div>
          <div className="team-copy">
            <p className="eyebrow">The team</p>
            <h2>Kristofer Freeland</h2>
            <p>Managing Director/Producer/Recording Engineer</p>
          </div>
        </Reveal>

        <Reveal className="team-row team-row-reverse" delay={0.08}>
          <div className="team-portrait">
            <Image
              src="/images/derek.webp"
              alt="Derek Wood"
              fill
              sizes="(max-width: 767px) 78vw, 420px"
            />
          </div>
          <div className="team-copy">
            <p className="eyebrow">The team</p>
            <h2>Derek Wood</h2>
            <p>Producer / Mixing &amp; Mastering Engineer</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
