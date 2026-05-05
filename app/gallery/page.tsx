import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata = {
  title: "Gallery | Aperture Gallery",
  description: "Explore our curated collection of contemporary art and photography.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
            Our Collection
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6">
            The Gallery
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Browse our complete collection of contemporary artworks and photography.
            Each piece has been carefully selected for its artistic merit and emotional resonance.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <GalleryGrid showFilters />
        </div>
      </section>

      <Footer />
    </main>
  );
}
