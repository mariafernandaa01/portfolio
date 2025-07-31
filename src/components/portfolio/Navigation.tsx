export const Navigation = () => {
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
    // Altura da navbar em pixels (ex: 64)
    const navHeight = document
      .querySelector('nav')
      ?.getBoundingClientRect().height || 0;

    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementTop - navHeight,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="sticky top-0 z-50 py-4 px-6 bg-card/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto">
        <ul className="flex gap-8 justify-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-smooth font-medium py-2 px-4 rounded-lg hover:bg-secondary/50"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};