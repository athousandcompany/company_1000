"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Artwork } from "@/lib/gallery-data";

interface ArtworkCardProps {
  artwork: Artwork;
  index?: number;
  variant?: "default" | "featured";
}

export function ArtworkCard({
  artwork,
  index = 0,
  variant = "default",
}: ArtworkCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      href={`/artwork/${artwork.id}`}
      className={cn(
        "group block relative overflow-hidden",
        variant === "featured" ? "aspect-[4/5]" : "aspect-[3/4]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className={cn(
            "object-cover transition-all duration-700 ease-out",
            isHovered ? "scale-105" : "scale-100",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
      </div>

      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Content */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 p-6 text-white transition-all duration-500",
          isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}
      >
        <span className="text-xs uppercase tracking-widest text-white/70 mb-2 block">
          {artwork.category}
        </span>
        <h3 className="text-xl md:text-2xl font-serif mb-1">{artwork.title}</h3>
        <p className="text-sm text-white/80">{artwork.artist}</p>
        {artwork.price && (
          <p className="text-sm text-white/60 mt-2">{artwork.price}</p>
        )}
      </div>

      {/* Corner accent */}
      <div
        className={cn(
          "absolute top-4 right-4 w-3 h-3 border-t border-r border-white/50 transition-all duration-500",
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-50"
        )}
      />
    </Link>
  );
}
