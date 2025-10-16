import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from "/logo-nome-IC.png";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Nossa Fé', href: '/nossa-fe' },
    { label: 'Sermões', href: '/sermoes' },
    { label: 'Comundado', href: '/comunicado' },
    { label: 'Visite-ns', href: '/visite-nos' },
  ];

  return (
    <header className="bg-brand-white border-b border-brand-olive/10 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img className="h-20 w-auto" src={Logo} alt="Logo"></img>
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-1 bg-brand-terracotta rotate-90 absolute"></div>
                <div className="w-6 h-1 bg-brand-terracotta absolute"></div>
              </div>
            </div>
            
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-brand-olive">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-brand-terracotta transition-colors font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-brand-olive hover:text-brand-terracotta transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-brand-olive/10 pt-4">
            <ul className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-brand-olive hover:text-brand-terracotta transition-colors font-medium block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}