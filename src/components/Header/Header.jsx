import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Você já tem o import correto!
import Logo from "/logo-nome-IC.png"; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Identidade', href: '/identidade' },
    { label: 'Sermões', href: '/sermoes' },
    { label: 'Comunicados', href: '/comunicados' },
    { label: 'Visite-nos', href: '/visite-nos' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fff]/75 backdrop-blur-xl border-b border-[#4e4627]/20">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {/* 👇 ALTERADO DE <a> PARA <Link> 👇 */}
          <Link to="/" aria-label="Página Inicial">
            <img className="h-16 md:h-20 w-auto" src={Logo} alt="Logo Igreja da Cruz" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-black">
            {menuItems.map((item) => (
              <li key={item.href}>
                {/* 👇 ALTERADO DE <a> PARA <Link> E href PARA to 👇 */}
                <Link
                  to={item.href}
                  className="hover:text-[#4e4627] transition-colors"
                >
                  {item.label}
                </Link>
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
                  {/* 👇 ALTERADO DE <a> PARA <Link> E href PARA to 👇 */}
                  <Link
                    to={item.href}
                    className="text-brand-olive hover:text-brand-terracotta transition-colors font-medium block py-2"
                    onClick={() => setIsMenuOpen(false)} // Mantém o onClick para fechar o menu
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}