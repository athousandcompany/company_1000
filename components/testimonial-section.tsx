"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Aperture Gallery has completely transformed my understanding of contemporary art. Each visit reveals new perspectives and inspires deep reflection.",
    author: "Sarah Mitchell",
    title: "Art Collector",
  },
  {
    quote:
      "The curation here is exceptional. Every exhibition tells a story, and the attention to detail in presentation is unmatched.",
    author: "David Chen",
    title: "Interior Designer",
  },
  {
    quote:
      "Working with Aperture to acquire pieces for our collection has been a wonderful experience. Their expertise and passion shine through.",
    author: "Elena Rodriguez",
    title: "Museum Director",
  },
];

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-accent mx-auto mb-8 opacity-50" />

          <div className="relative min-h-[200px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-700",
                  index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                )}
              >
                <blockquote className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <cite className="not-italic text-lg font-medium text-foreground">
                    {testimonial.author}
                  </cite>
                  <p className="text-sm text-muted-foreground mt-1">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={cn(
                    "w-8 h-0.5 transition-all duration-300",
                    index === current ? "bg-foreground" : "bg-border"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
