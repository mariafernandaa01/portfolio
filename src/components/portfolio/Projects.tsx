import { PortfolioData } from '@/hooks/usePortfolioData';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  data: PortfolioData | null;
  loading: boolean;
}

export const Projects = ({ data, loading }: ProjectsProps) => {
  if (loading) {
    return (
      <section id="projects" className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-8 mx-auto"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border">
                  <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-muted rounded w-full mb-2"></div>
                  <div className="h-4 bg-muted rounded w-2/3 mb-4"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 bg-muted rounded w-16"></div>
                    <div className="h-6 bg-muted rounded w-20"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const projects = data?.projects || [];

  return (
    <section id="projects" className="py-16 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-3xl font-bold text-foreground mb-12 text-center">
          Projetos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length > 0 ? projects.map((project) => (
            <div key={project.id} className="card bg-gradient-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated transition-smooth group">
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <Github size={16} />
                    <span className="text-sm">Código</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-smooth"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                )}
              </div>
            </div>
          )) : (
            <div className="col-span-full text-center">
              <p className="text-muted-foreground">
                Projetos serão carregados do portfolio.json
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};