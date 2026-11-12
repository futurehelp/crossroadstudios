"use client";

import Image from "next/image";
import { motion } from "motion/react";

type ServiceCardProps = {
  title: string;
  price: string;
  description: string;
  image: string;
  alt: string;
  index: number;
};

export function ServiceCard({ title, price, description, image, alt, index }: ServiceCardProps) {
  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.68, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className="service-card-copy">
        <span className="service-number">0{index + 1}</span>
        <h3>{title}</h3>
        <p className="service-price">{price}</p>
        <p>{description}</p>
      </div>
      <div className="service-image">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 767px) 92vw, 30vw"
          unoptimized={image.endsWith(".gif")}
        />
        <span className="image-glint" aria-hidden="true" />
      </div>
    </motion.article>
  );
}
