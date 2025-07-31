import { usePortfolioData } from '@/hooks/usePortfolioData';
import { Header } from '@/components/portfolio/Header';
import { Navigation } from '@/components/portfolio/Navigation';
import { About } from '@/components/portfolio/About';
import { Projects } from '@/components/portfolio/Projects';
import { Skills } from '@/components/portfolio/Skills';
import { Education } from '@/components/portfolio/Education';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';

const Index = () => {
  const { data, loading, error } = usePortfolioData();

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive mb-4">Erro ao carregar portfólio</h1>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Seção vazia que será preenchida com dados JSON */}
      <Header data={data} loading={loading} />
      
      {/* Navigation - Menu de navegação */}
      <Navigation />
      
      <main>
        {/* About - Seção vazia que será preenchida com data.bio */}
        <About data={data} loading={loading} />
        
        {/* Projects - Seção vazia que será preenchida com data.projects */}
        <Projects data={data} loading={loading} />
        
        {/* Skills - Seção vazia que será preenchida com data.skills */}
        <Skills data={data} loading={loading} />
        
        {/* Education - Seção vazia que será preenchida com data.education */}
        <Education data={data} loading={loading} />
        
        {/* Contact - Seção vazia que será preenchida com data.contact */}
        <Contact data={data} loading={loading} />
      </main>
      
      {/* Footer - Rodapé estático */}
      <Footer />
    </div>
  );
};

export default Index;
