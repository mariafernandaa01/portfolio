import { PortfolioData } from '@/hooks/usePortfolioData';
import { icons, LucideIcon } from 'lucide-react';

interface SkillsProps {
  data: PortfolioData | null;
  loading: boolean;
}

export const Skills = ({ data, loading }: SkillsProps) => {
  if (loading) {
    return (
      <section id="skills" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-8 mx-auto"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border">
                  <div className="h-6 bg-muted rounded w-2/3 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const skills = data?.skills || [];

  return (
    <section id="skills" className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-3xl font-bold text-foreground mb-12 text-center">
          Habilidades
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.length > 0 ? skills.map((skillGroup, index) => (
            <div key={index} className="bg-gradient-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated transition-smooth">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {skillGroup.category}
              </h3>
              <ul className="list space-y-3">
                {skillGroup.items.map((skill, skillIndex) => {
                  const skillName = typeof skill === 'string' ? skill : skill.name;
                  const iconName = typeof skill === 'string' ? null : skill.icon;
                  const IconComponent = iconName ? (icons[iconName as keyof typeof icons] as LucideIcon) : null;
                  
                  return (
                    <li key={skillIndex} className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-3">
                      {IconComponent ? (
                        <IconComponent className="w-5 h-5 text-primary" />
                      ) : (
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                      )}
                      <span className="font-medium">{skillName}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )) : (
            <div className="col-span-full text-center">
              <p className="text-muted-foreground">
                Habilidades serão carregadas do portfolio.json
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};