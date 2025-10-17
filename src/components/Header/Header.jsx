import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from "/logo-nome-IC.png"; // Certifique-se que o caminho do logo está correto

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Nossa Fé', href: '/nossa-fe' },
    { label: 'Sermões', href: '/sermoes' },
    { label: 'Comunicados', href: '/comunicados' }, // Corrigi "Comundado" para "Comunicados"
    { label: 'Visite-nos', href: '/visite-nos' },  // Corrigi "Visite-ns" para "Visite-nos"
  ];

  return (
    //  👇 AS ALTERAÇÕES FORAM FEITAS AQUI 👇
    <header className="sticky top-0 z-50 bg-[#fff]/75 backdrop-blur-xl border-b border-[#4e4627]/20">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" aria-label="Página Inicial">
            <img className="h-16 md:h-20 w-auto" src={Logo} alt="Logo Igreja da Cruz" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-black">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-[#4e4627] transition-colors"
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
            aria-label="Abrir menu"
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