"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { exhibitions } from "@/lib/gallery-data";

export function FeaturedSection() {
  const featuredExhibitions = exhibitions.filter((ex) => ex.featured);

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
            Now Showing
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Current Exhibitions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredExhibitions.map((exhibition, index) => (
            <Link
              key={exhibition.id}
              href={`/exhibitions/${exhibition.id}`}
              className="group relative overflow-hidden aspect-[16/10]"
            >
              <Image
                src={exhibition.image}
                alt={exhibition.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-xs uppercase tracking-widest text-white/70 mb-2">
                  {new Date(exhibition.startDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  -{" "}
                  {new Date(exhibition.endDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif mb-3">
                  {exhibition.title}
                </h3>
                <p className="text-white/80 text-sm line-clamp-2 mb-4 max-w-lg">
                  {exhibition.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/exhibitions"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors"
          >
            View All Exhibitions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
