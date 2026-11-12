import type { Metadata } from "next";
import { MusicCard } from "@/components/music-card";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Music",
  description: "Listen to music recorded and produced at Crossroad Studios.",
};

const releases = [
  { artist: "Blackwater Bayou", title: "Six Feet Down", image: "/images/six-feet-down.webp", href: "https://open.spotify.com/album/1stMxUX7lod2h9Xhld4YND?si=sOAtQyYbQiupH6iJ-zsR8A" },
  { artist: "Blackwater Bayou", title: "Los Angeles", image: "/images/los-angeles.webp", href: "https://open.spotify.com/album/5tyV7oB1wvXpdZLIUKSr0S?si=uiRY6l7wQSucTIiV97jRew" },
  { artist: "Blackwater Bayou", title: "Don’t Feel You", image: "/images/dont-feel-you.webp", href: "https://open.spotify.com/track/6vqcLHuZBvuT0Ndp5s8Xc2?si=64000ac1062d4027" },
  { artist: "Blackwater Bayou", title: "Cut to the Chase", image: "/images/cut-to-the-chase.webp", href: "https://open.spotify.com/track/1yFKmu2IYELBcOfKP5dHDA?si=5bd6fb479e6349fd" },
  { artist: "John Barton", title: "You Called My Name", image: "/images/you-called-my-name.webp", href: "https://open.spotify.com/track/1Hw007V2Wza4mG0raauBus?si=f235066eedd84d8d" },
  { artist: "Blackwater Bayou", title: "The Machine", image: "/images/the-machine.webp", href: "https://open.spotify.com/album/2EVgajcozNtMvz7CQFNzkZ" },
  { artist: "Blackwater Bayou", title: "Round Here", image: "/images/round-here.webp", href: "https://open.spotify.com/artist/72k0YwudQhVyAcYAEuuJVd?si=whAhScwkS_CCoZ4zFYZnIw" },
  { artist: "Blackwater Bayou", title: "Burned Down House (feat. Caitlin Dickerson)", image: "/images/burned-down-house.webp", href: "https://open.spotify.com/album/5cXln55QWLU9dsA9K2nRr8?si=Y4xz0uVeSiukM1JIB3H9aQ" },
  { artist: "Johnny Struts", title: "Big Muscle Cadillac", image: "/images/big-muscle-cadillac.webp", href: "https://open.spotify.com/artist/0OadRazJCiBhze5EJl4L5f?si=4jI6vNtCTcaK0VqMmDMfhQ" },
  { artist: "Whiskey Halo", title: "Behind Bars", image: "/images/behind-bars.webp", href: "https://open.spotify.com/track/3xhjZ2RjFGZDwmwfnMy9Rp?si=Zu9zGkG5QZu6f3u1fGrEaA&context=spotify%3Aalbum%3A4fpZCSo2s7nMIloqhrRV54" },
];

export default function MusicPage() {
  return (
    <section className="music-page" aria-labelledby="music-title">
      <Reveal className="page-intro">
        <p className="eyebrow">It begins with an idea</p>
        <h1 id="music-title">Listen Up</h1>
      </Reveal>

      <Reveal className="spotify-frame" delay={0.06}>
        <iframe
          title="Crossroad Studios playlist on Spotify"
          src="https://open.spotify.com/embed/playlist/4n1ikLzV8ki7dqcItbKC5z?utm_source=generator&theme=0"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </Reveal>

      <div className="music-grid">
        {releases.map((release, index) => (
          <MusicCard key={`${release.artist}-${release.title}`} {...release} index={index} />
        ))}
      </div>
    </section>
  );
}
