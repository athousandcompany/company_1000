"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArtworkCard } from "./artwork-card";
import { artworks, categories } from "@/lib/gallery-data";

interface GalleryGridProps {
  showFilters?: boolean;
  limit?: number;
  featured?: boolean;
}

export function GalleryGrid({
  showFilters = true,
  limit,
  featured = false,
}: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArtworks = artworks.filter((artwork) => {
    if (featured && !artwork.featured) return false;
    if (activeCategory === "All") return true;
    return artwork.category === activeCategory;
  });

  const displayedArtworks = limit
    ? filteredArtworks.slice(0, limit)
    : filteredArtworks;

  return (
    <div>
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "text-sm uppercase tracking-widest px-4 py-2 transition-all duration-300",
                activeCategory === category
                  ? "text-foreground border-b-2 border-accent"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedArtworks.map((artwork, index) => (
          <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
        ))}
      </div>

      {displayedArtworks.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">
            No artworks found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
