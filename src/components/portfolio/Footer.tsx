export const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} - Portfólio desenvolvido com React + TypeScript
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Dados carregados dinamicamente via JSON
          </p>
        </div>
      </div>
    </footer>
  );
};