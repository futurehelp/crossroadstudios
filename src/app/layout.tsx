import type { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { MotionProvider } from "@/components/motion";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://crossroadstudios.vercel.app"),
  title: {
    default: "Crossroad Studios",
    template: "%s | Crossroad Studios",
  },
  description:
    "Recording, production, mixing, and mastering for musicians in Arkansas.",
  openGraph: {
    title: "Crossroad Studios",
    description:
      "Bring your musical vision to life at Crossroad Studios in Arkansas.",
    images: ["/images/logo.webp"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <MotionProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
