import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "About | Aperture Gallery",
  description: "Learn about Aperture Gallery's mission, history, and the team behind our curated collection.",
};

const team = [
  {
    name: "Alexandra Reed",
    role: "Founder & Director",
    image: "/gallery/artwork-4.jpg",
  },
  {
    name: "Marcus Chen",
    role: "Chief Curator",
    image: "/gallery/artwork-8.jpg",
  },
  {
    name: "Isabella Santos",
    role: "Gallery Manager",
    image: "/gallery/artwork-1.jpg",
  },
];

const stats = [
  { number: "500+", label: "Artworks" },
  { number: "50+", label: "Artists" },
  { number: "100+", label: "Exhibitions" },
  { number: "14", label: "Years" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-8 leading-tight">
              A Space Dedicated to Visual Excellence
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2010, Aperture Gallery has been at the forefront of
              contemporary art and photography, creating meaningful connections
              between artists, collectors, and art enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src="/gallery/artwork-7.jpg"
              alt="Gallery interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
                Our Story
              </span>
              <h2 className="text-4xl font-serif text-foreground mb-6">
                Where Art Comes Alive
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Aperture Gallery began with a simple vision: to create a space
                where art could breathe and viewers could be moved. Our founder,
                Alexandra Reed, believed that galleries should be more than
                sterile white boxes—they should be living spaces that invite
                contemplation and inspire conversation.
              </p>
              <p>
                Over the years, we&apos;ve grown from a small exhibition space to
                one of the city&apos;s most respected contemporary art galleries.
                We&apos;ve hosted over 100 exhibitions, represented more than 50
                artists, and helped countless collectors discover works that
                speak to them.
              </p>
              <p>
                Today, we continue to push boundaries, showcasing emerging
                talent alongside established masters, and creating exhibitions
                that challenge, provoke, and ultimately celebrate the power of
                visual art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-5xl md:text-6xl font-serif text-foreground block mb-2">
                  {stat.number}
                </span>
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <span className="text-sm uppercase tracking-widest text-primary-foreground/70 mb-4 block">
            Our Mission
          </span>
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif max-w-4xl mx-auto leading-relaxed">
            &ldquo;To cultivate a deeper understanding and appreciation of
            contemporary art by connecting artists with audiences who will
            cherish their work for generations.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
              The People
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Meet Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Ready to Experience Our Collection?
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground mb-8">
            Visit our gallery in person or explore our collection online.
            We&apos;d love to share our passion for art with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-4 border border-foreground text-foreground text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
            >
              Browse Gallery
              <ArrowRight className="w-4 h-4 inline-block ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
