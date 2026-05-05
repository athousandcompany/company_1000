import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { GalleryGrid } from "@/components/gallery-grid";
import { FeaturedSection } from "@/components/featured-section";
import { TestimonialSection } from "@/components/testimonial-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />

      {/* Featured Works */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
            <div>
              <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
                Featured Collection
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                Selected Works
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors mt-4 md:mt-0"
            >
              View Full Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <GalleryGrid showFilters={false} limit={6} featured />
        </div>
      </section>

      <FeaturedSection />

      {/* About Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/gallery/artwork-7.jpg"
                alt="Gallery interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="max-w-lg">
              <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
                A Space for Visual Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2010, Aperture Gallery has been dedicated to
                showcasing exceptional contemporary art and photography. Our
                mission is to create meaningful connections between artists and
                collectors, fostering a deeper appreciation for visual
                storytelling.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With carefully curated exhibitions and a commitment to emerging
                talent, we provide a platform where creativity flourishes and
                boundaries are pushed.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />

      {/* CTA Section */}
      <section className="py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Visit Our Gallery
          </h2>
          <p className="max-w-xl mx-auto text-accent-foreground/80 mb-8">
            Experience our collection in person. Walk through our carefully
            designed spaces and discover works that speak to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-background text-foreground text-sm uppercase tracking-widest hover:bg-background/90 transition-colors"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-4 border border-accent-foreground text-sm uppercase tracking-widest hover:bg-accent-foreground hover:text-accent transition-colors"
            >
              Browse Online
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
