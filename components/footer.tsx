import Link from "next/link";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-serif font-medium mb-4">Aperture</h2>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A curated space for contemporary art and photography, celebrating
              visual excellence since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6">Explore</h3>
            <ul className="space-y-3">
              {["Gallery", "Exhibitions", "Artists", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6">Visit</h3>
            <address className="not-italic text-primary-foreground/70 text-sm space-y-3">
              <p>123 Gallery Street</p>
              <p>New York, NY 10001</p>
              <p className="pt-2">Open Tuesday - Sunday</p>
              <p>10:00 AM - 6:00 PM</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6">
              Stay Connected
            </h3>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Subscribe for exhibition updates and exclusive previews.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40"
              />
              <button
                type="submit"
                className="bg-primary-foreground text-primary px-4 py-2 text-sm hover:bg-primary-foreground/90 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-xs">
            © {new Date().getFullYear()} Aperture Gallery. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
