"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const heroImages = [
  "/gallery/artwork-1.jpg",
  "/gallery/artwork-6.jpg",
  "/gallery/artwork-10.jpg",
];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={cn(
            "absolute inset-0 transition-opacity duration-1500",
            index === currentImage ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
        <span
          className={cn(
            "text-sm uppercase tracking-[0.3em] mb-6 transition-all duration-1000 delay-300",
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          )}
        >
          Contemporary Art & Photography
        </span>
        <h1
          className={cn(
            "text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight mb-8 transition-all duration-1000 delay-500",
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          )}
        >
          <span className="block text-balance">Where Vision</span>
          <span className="block italic">Meets Emotion</span>
        </h1>
        <p
          className={cn(
            "max-w-xl text-lg text-white/80 mb-12 transition-all duration-1000 delay-700",
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          )}
        >
          Discover extraordinary works from emerging and established artists in
          our thoughtfully curated collection.
        </p>
        <div
          className={cn(
            "flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900",
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          )}
        >
          <Link
            href="/gallery"
            className="px-8 py-4 bg-white text-black text-sm uppercase tracking-widest hover:bg-white/90 transition-colors"
          >
            Explore Collection
          </Link>
          <Link
            href="/exhibitions"
            className="px-8 py-4 border border-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Current Exhibitions
          </Link>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={cn(
                "w-12 h-0.5 transition-all duration-500",
                index === currentImage ? "bg-white" : "bg-white/30"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-white/70" />
        </div>
      </div>
    </section>
  );
}
