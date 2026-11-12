"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRightIcon } from "./icons";

type MusicCardProps = {
  artist: string;
  title: string;
  image: string;
  href: string;
  index: number;
};

export function MusicCard({ artist, title, image, href, index }: MusicCardProps) {
  return (
    <motion.a
      className="music-card"
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.62, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -7 }}
      whileTap={{ scale: 0.99 }}
      aria-label={`Listen to ${title} by ${artist} on Spotify`}
    >
      <div className="album-art">
        <Image
          src={image}
          alt={`${title} cover art`}
          fill
          sizes="(max-width: 575px) 92vw, (max-width: 900px) 45vw, 30vw"
          loading={index === 0 ? "eager" : "lazy"}
        />
        <span className="album-overlay">
          Listen on Spotify
          <ArrowUpRightIcon />
        </span>
      </div>
      <div className="music-card-copy">
        <div>
          <p>{artist}</p>
          <h2>{title}</h2>
        </div>
        <ArrowUpRightIcon />
      </div>
    </motion.a>
  );
}
