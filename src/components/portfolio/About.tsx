import { PortfolioData } from '@/hooks/usePortfolioData';

interface AboutProps {
  data: PortfolioData | null;
  loading: boolean;
}

export const About = ({ data, loading }: AboutProps) => {
  if (loading) {
    return (
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title text-3xl font-bold text-foreground mb-8 text-center">
          Sobre Mim
        </h2>
        <div className="bg-gradient-card rounded-xl p-8 shadow-card border border-border">
          <p className="text-lg text-muted-foreground leading-relaxed text-justify">
            {data?.bio || '{{BIO_PLACEHOLDER}} - Descrição detalhada sobre experiência, objetivos e paixões na programação.'}
          </p>
        </div>
      </div>
    </section>
  );
};