import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a recording session at Crossroad Studios in Arkansas.",
};

export default function ContactPage() {
  return (
    <section className="contact-page" aria-labelledby="contact-title">
      <Reveal className="contact-copy">
        <p className="eyebrow">Book a session</p>
        <h1 id="contact-title">Come Record With Us</h1>
        <p className="contact-lede">
          Experience our top-notch recording services designed for musicians in
          Arkansas looking to bring their musical vision to life. Contact us to
          begin your creative journey, and let our experienced engineers guide
          you every step of the way!
        </p>
        <div className="contact-links">
          <a href="mailto:crossroadstudios1@gmail.com">
            <span>Email</span>
            crossroadstudios1@gmail.com
          </a>
          <a href="tel:+18705576373">
            <span>Studio</span>
            (870) 557-6373
          </a>
          <a href="tel:+15015900116">
            <span>Direct</span>
            (501) 590-0116
          </a>
        </div>
      </Reveal>

      <Reveal className="contact-image" delay={0.08} y={20}>
        <Image
          src="/images/contact-studio.webp"
          alt="Interior of the Crossroad Studios recording room"
          fill
          sizes="(max-width: 900px) 92vw, 48vw"
          loading="eager"
        />
        <div className="image-corner-label">Crossroad Studios · Arkansas</div>
      </Reveal>
    </section>
  );
}
