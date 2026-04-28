import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/aigrejadacruz?igsh=Zmd1MG9uanFhbDh4",
      label: "Instagram",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@igrejadacruz6659",
      label: "YouTube",
    },
    {
      icon: FaSpotify,
      href: "https://open.spotify.com/show/3ZDOME0aI6bCU9CGBNzB4f?si=HjFAegS-R-GXsYP2YwwNbA",
      label: "Spotify",
    },
  ];

  return (
    <footer className="bg-olive-lighter border-t border-terracotta py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-terracotta font-semibold">
            © {new Date().getFullYear()} - IGREJA DA CRUZ
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-10 h-10 rounded-full bg-brand-terracotta text-brand-white flex items-center justify-center hover:bg-brand-terracotta-light transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
