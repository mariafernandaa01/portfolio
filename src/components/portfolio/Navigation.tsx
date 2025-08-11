import { useState } from 'react';
import { X, List } from 'lucide-react'; // ícones do lucide-react

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'Sobre' },
    { id: 'projects', label: 'Projetos' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'education', label: 'Educação' },
    { id: 'contact', label: 'Contato' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const navHeight = document.querySelector('nav')?.getBoundingClientRect().height || 0;
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: elementTop - navHeight, behavior: 'smooth' });
    setOpen(false); // fecha o menu ao clicar
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo ou nome no canto esquerdo (opcional) */}
        <div className="text-lg font-bold">Meu Portfolio</div>

        {/* Botão hamburger no mobile */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-secondary/50 transition-smooth"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>

        {/* Menu horizontal em MD+ */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary font-medium py-2 px-4 rounded-lg transition-smooth hover:bg-secondary/50"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Drawer vertical no mobile */}
      {open && (
        <div className="md:hidden bg-card/90 backdrop-blur-sm border-t border-border">
          <ul className="flex flex-col gap-2 py-4 px-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left text-muted-foreground hover:text-primary font-medium py-2 rounded-lg transition-smooth hover:bg-secondary/50"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};