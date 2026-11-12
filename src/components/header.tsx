"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FacebookIcon, InstagramIcon } from "./icons";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About Us" },
  { href: "/music", label: "Music" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/crossroad_studios",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://www.facebook.com/profile.php?id=61561821869284&mibextid=LQQJ4d",
    label: "Facebook",
    icon: FacebookIcon,
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Crossroad Studios home">
          <Image
            src="/images/logo.webp"
            alt="Crossroad Studios"
            width={1200}
            height={251}
            loading="eager"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                href={item.href}
                key={item.href}
                className={active ? "nav-link active" : "nav-link"}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <div className="social-links desktop-socials">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link className="button button-primary desktop-book" href="/contact">
              Book now
            </Link>
          </motion.div>
        </div>

        <button
          className={isOpen ? "menu-toggle open" : "menu-toggle"}
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.055, duration: 0.42 }}
                >
                  <Link
                    href={item.href}
                    className={pathname === item.href ? "active" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className="mobile-menu-bottom"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link className="button button-primary" href="/contact">
                Book now
              </Link>
              <div className="social-links">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
