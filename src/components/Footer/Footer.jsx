import { Facebook, Instagram, Youtube, Music } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    // { icon: Facebook, href: '#', label: 'Facebook' },
    // { icon: Instagram, href: '#', label: 'Instagram' },
    // { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Music, href: '#', label: 'Spotify' },
  ];

  return (
    <footer className="bg-brand-olive-lighter border-t border-brand-olive/10 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-brand-olive/70 text-sm">
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