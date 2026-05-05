import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArtworkCard } from "@/components/artwork-card";
import { exhibitions, artworks } from "@/lib/gallery-data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return exhibitions.map((exhibition) => ({
    id: exhibition.id,
  }));
}

export default async function ExhibitionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const exhibition = exhibitions.find((e) => e.id === id);

  if (!exhibition) {
    notFound();
  }

  // Get some related artworks based on exhibition theme
  const exhibitionArtworks = artworks.slice(0, 6);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src={exhibition.image}
          alt={exhibition.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container mx-auto px-6 pb-16">
            <Link
              href="/exhibitions"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All Exhibitions
            </Link>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
              {exhibition.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
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
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Main Gallery</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Tue - Sun, 10AM - 6PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif text-foreground mb-6">
                About the Exhibition
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {exhibition.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This exhibition brings together a diverse collection of works that
                challenge conventional perspectives and invite viewers to engage
                with art on a deeper level. Each piece has been carefully selected
                to create a dialogue between different artistic approaches while
                maintaining a cohesive narrative throughout the gallery spaces.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-6">
                Visitors are encouraged to take their time exploring the exhibition,
                allowing the works to unfold their stories gradually. Guided tours
                are available on weekends, offering additional insights into the
                artists&apos; processes and the curatorial vision behind the show.
              </p>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-secondary p-8">
                <h3 className="text-xl font-serif text-foreground mb-6">
                  Plan Your Visit
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-muted-foreground block mb-1">
                      Location
                    </span>
                    <span className="text-foreground">
                      123 Gallery Street, New York, NY
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-1">
                      Gallery Hours
                    </span>
                    <span className="text-foreground">
                      Tuesday - Sunday: 10AM - 6PM
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-1">
                      Admission
                    </span>
                    <span className="text-foreground">
                      Free for members / $15 General
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-1">
                      Guided Tours
                    </span>
                    <span className="text-foreground">
                      Saturdays & Sundays at 2PM
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="block w-full py-4 bg-primary text-primary-foreground text-center text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors mt-8"
                >
                  Book a Private Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-foreground mb-12 text-center">
            Featured Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exhibitionArtworks.map((artwork, index) => (
              <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
