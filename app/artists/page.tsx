import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { artists, artworks } from "@/lib/gallery-data";

export const metadata = {
  title: "Artists | Aperture Gallery",
  description: "Meet the talented artists featured in our gallery collection.",
};

export default function ArtistsPage() {
  // Group artworks by artist
  const artistsWithWorks = artists.map((artist) => ({
    ...artist,
    works: artworks.filter((a) => a.artist === artist.name).slice(0, 3),
  }));

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
            Creative Minds
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6">
            Our Artists
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Discover the talented artists whose work graces our gallery. Each brings
            a unique perspective and mastery of their craft.
          </p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {artistsWithWorks.map((artist, index) => (
              <div
                key={artist.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-square w-48 h-48 rounded-full overflow-hidden mb-6 mx-auto lg:mx-0">
                    <Image
                      src={artist.avatar}
                      alt={artist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm uppercase tracking-widest text-muted-foreground mb-2 block text-center lg:text-left">
                    {artist.country}
                  </span>
                  <h2 className="text-4xl font-serif text-foreground mb-4 text-center lg:text-left">
                    {artist.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-center lg:text-left">
                    {artist.bio}
                  </p>
                  <div className="flex items-center gap-4 justify-center lg:justify-start">
                    <span className="text-sm text-muted-foreground">
                      {artist.artworks} works in collection
                    </span>
                    <Link
                      href={`/gallery?artist=${encodeURIComponent(artist.name)}`}
                      className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors"
                    >
                      View Works
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div
                  className={`grid grid-cols-3 gap-4 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  {artist.works.map((work) => (
                    <Link
                      key={work.id}
                      href={`/artwork/${work.id}`}
                      className="group relative aspect-square overflow-hidden"
                    >
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Interested in Featuring Your Work?
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground mb-8">
            We&apos;re always looking for talented artists to join our gallery. Submit
            your portfolio for consideration.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Submit Your Work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
