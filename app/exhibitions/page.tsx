import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { exhibitions } from "@/lib/gallery-data";

export const metadata = {
  title: "Exhibitions | Aperture Gallery",
  description: "Discover our current and upcoming exhibitions featuring contemporary art and photography.",
};

export default function ExhibitionsPage() {
  const currentExhibitions = exhibitions.filter(
    (ex) => new Date(ex.endDate) >= new Date()
  );
  const pastExhibitions = exhibitions.filter(
    (ex) => new Date(ex.endDate) < new Date()
  );

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
            Experience Art
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6">
            Exhibitions
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Immerse yourself in our thoughtfully curated exhibitions, each designed
            to tell a unique story through the power of visual art.
          </p>
        </div>
      </section>

      {/* Current Exhibitions */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-foreground mb-12">
            Current & Upcoming
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {currentExhibitions.map((exhibition, index) => (
              <Link
                key={exhibition.id}
                href={`/exhibitions/${exhibition.id}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={exhibition.image}
                    alt={exhibition.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
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
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                    {exhibition.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
                    {exhibition.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground group-hover:text-accent transition-colors">
                    View Exhibition
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Past Exhibitions */}
      {pastExhibitions.length > 0 && (
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif text-foreground mb-12">
              Past Exhibitions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastExhibitions.map((exhibition) => (
                <div
                  key={exhibition.id}
                  className="group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden mb-4">
                    <Image
                      src={exhibition.image}
                      alt={exhibition.title}
                      fill
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(exhibition.startDate).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <h3 className="text-xl font-serif text-foreground mt-1">
                    {exhibition.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
