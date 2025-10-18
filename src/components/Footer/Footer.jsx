import { Facebook, Instagram, Youtube, Music } from 'lucide-react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMusic,
  FaSpotify,
  FaCopy,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
    { icon: FaSpotify, href: '#', label: 'Spotify' },
  ];
  

  return (
    <footer className="bg-[#f5f4f0] border-t border-[#914d30] py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-[#914d30] font-semibold">
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