import { NewsletterForm } from "@/components/newsletter-form";
import { Reveal } from "@/components/motion";
import { ServiceCard } from "@/components/service-card";

const services = [
  {
    title: "Track Your Song!",
    price: "$60 per hour (min 2 hours)",
    description:
      "Tailored to elevate your musical journey with precision and care.",
    image: "/images/service-mixer.webp",
    alt: "Recording console lit in a dark studio",
  },
  {
    title: "Full Day Recording Session",
    price: "$500",
    description:
      "Designed to bring your vision to life. This package includes tracking, mixing, or mastering.",
    image: "/images/service-studio.webp",
    alt: "Crossroad Studios recording room with drums and guitars",
  },
  {
    title: "End-to-end Song Production",
    price: "$650",
    description:
      "If you don’t have a band, we can provide professional studio musicians and fully produce your song!",
    image: "/images/service-guitarist.gif",
    alt: "Guitarist performing on stage",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-sheen" aria-hidden="true" />
        <Reveal className="hero-copy" y={32}>
          <p className="eyebrow">Arkansas recording studio</p>
          <h1 id="home-title">It Begins With An Idea</h1>
          <div className="hero-contact">
            <a href="mailto:crossroadstudios1@gmail.com">
              crossroadstudios1@gmail.com
            </a>
            <a href="tel:+18705576373">(870) 557-6373</a>
          </div>
        </Reveal>
        <span className="scroll-cue" aria-hidden="true">
          <span />
        </span>
      </section>

      <section className="services-section" aria-labelledby="services-title">
        <Reveal>
          <p className="eyebrow">From first take to final master</p>
          <h2 id="services-title">Our Services</h2>
        </Reveal>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </section>

      <section className="newsletter-section" aria-labelledby="subscribe-title">
        <Reveal className="newsletter-intro">
          <p className="eyebrow">Stay in the loop</p>
          <h2 id="subscribe-title">Subscribe</h2>
          <p>Sign up with your email address to receive news and updates.</p>
        </Reveal>
        <NewsletterForm />
      </section>
    </>
  );
}
