"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, Share2, Maximize2 } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArtworkCard } from "@/components/artwork-card";
import { Lightbox } from "@/components/lightbox";
import { artworks } from "@/lib/gallery-data";

export default function ArtworkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const artwork = artworks.find((a) => a.id === id);
  const relatedArtworks = artworks
    .filter((a) => a.category === artwork?.category && a.id !== id)
    .slice(0, 3);

  if (!artwork) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-32 pb-24 text-center">
          <h1 className="text-4xl font-serif mb-4">Artwork Not Found</h1>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Gallery
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-6">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </Link>
        </div>
      </div>

      {/* Artwork Detail */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <div className="relative group">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute bottom-4 right-4 p-3 bg-black/50 text-white hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                aria-label="View fullscreen"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <div className="mb-8">
                <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
                  {artwork.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
                  {artwork.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {artwork.artist}, {artwork.year}
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                    Medium
                  </h3>
                  <p className="text-foreground">{artwork.medium}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                    Dimensions
                  </h3>
                  <p className="text-foreground">{artwork.dimensions}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                    About This Work
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {artwork.description}
                  </p>
                </div>
              </div>

              {artwork.price && (
                <div className="border-t border-border pt-8 mb-8">
                  <p className="text-3xl font-serif text-foreground mb-4">
                    {artwork.price}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="flex-1 py-4 bg-primary text-primary-foreground text-center text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
                    >
                      Inquire About This Work
                    </Link>
                    <button
                      onClick={() => setIsSaved(!isSaved)}
                      className="p-4 border border-border hover:bg-secondary transition-colors"
                      aria-label={isSaved ? "Remove from saved" : "Save artwork"}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          isSaved
                            ? "fill-accent text-accent"
                            : "text-foreground"
                        }`}
                      />
                    </button>
                    <button
                      className="p-4 border border-border hover:bg-secondary transition-colors"
                      aria-label="Share artwork"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              <div className="mt-auto pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Interested in this piece? Contact our gallery for availability,
                  shipping information, and to arrange a private viewing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Works */}
      {relatedArtworks.length > 0 && (
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif text-foreground mb-12 text-center">
              Related Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArtworks.map((work, index) => (
                <ArtworkCard key={work.id} artwork={work} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      <Lightbox
        images={[artwork.image]}
        currentIndex={0}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNext={() => {}}
        onPrevious={() => {}}
      />

      <Footer />
    </main>
  );
}
