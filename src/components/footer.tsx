import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link href="/" className="footer-brand" aria-label="Crossroad Studios home">
        <Image src="/images/logo.webp" alt="Crossroad Studios" width={1200} height={251} />
      </Link>
      <nav className="footer-nav" aria-label="Footer navigation">
        <Link href="/aboutus">About</Link>
        <span aria-hidden="true">|</span>
        <Link href="/music">Music</Link>
        <span aria-hidden="true">|</span>
        <Link href="/contact">BookNow</Link>
      </nav>
      <a href="mailto:crossroadstudios1@gmail.com">crossroadstudios1@gmail.com</a>
      <a href="tel:+15015900116">(501) 590-0116</a>
      <div className="social-links footer-socials">
        <a href="https://www.instagram.com/crossroad_studios" target="_blank" rel="noreferrer" aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61561821869284&mibextid=LQQJ4d" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FacebookIcon />
        </a>
      </div>
      <p className="design-credit">
        Design by{" "}
        <a href="https://eleganceit.co/" target="_blank" rel="noreferrer">
          Elegance IT Solution
        </a>
      </p>
    </footer>
  );
}
