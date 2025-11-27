import { useState, Fragment } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "/logo-nome-IC.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '/' },
    {
      label: 'Identidade',
      href: '/identidade',
      submenu: [
        { label: 'Nossa História', href: '/identidade/historia' },
        { label: 'Confissão de Fé', href: '/identidade/confissao' },
        { label: 'Liderança', href: '/identidade/lideranca' },
      ],
    },
    { label: 'Sermões', href: '/sermoes' },
    { label: 'Comunicados', href: '/comunicados' },
    { label: 'Visite-nos', href: '/visite-nos' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fff]/75 backdrop-blur-xl border-b border-[#4e4627]/20">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" aria-label="Página Inicial">
            <img className="h-16 md:h-20 w-auto" src={Logo} alt="Logo Igreja da Cruz" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-black">
            {menuItems.map((item) => (
              item.submenu ? (
                <li key={item.label} className="relative group">
                  <Link
                    to={item.href}
                    className="hover:text-[#4e4627] transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  {/* O Dropdown em si */}
                  <ul className="
                    absolute
                    left-0
                    top-full     // Posiciona abaixo do item pai
                    w-48         // Largura fixa
                    bg-white
                    border border-[#4e4627]/20
                    rounded-md
                    shadow-lg
                    pt-4         // {/** MUDANÇA: 'mt-2' e 'py-2' viraram 'pt-4' **/}
                    pb-2         // {/** MUDANÇA: e 'pb-2' **/}
                    hidden       // Escondido por padrão
                    group-hover:block // Aparece no hover do 'group' (o <li> pai)
                  ">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-[#4e4627] font-medium"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="hover:text-[#4e4627] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              )
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
                <Fragment key={item.label}>
                  <li>
                    <Link
                      to={item.href}
                      className="text-brand-olive hover:text-brand-terracotta transition-colors font-medium block py-2"
                      onClick={() => {
                        if (!item.submenu) {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                  {item.submenu && item.submenu.map((subItem) => (
                    <li key={subItem.href} className="pl-6">
                      <Link
                        to={subItem.href}
                        className="text-gray-700 hover:text-brand-terracotta transition-colors font-normal block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </Fragment>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}