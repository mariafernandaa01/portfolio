import { PortfolioData } from '@/hooks/usePortfolioData';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

interface ContactProps {
  data: PortfolioData | null;
  loading: boolean;
}

export const Contact = ({ data, loading }: ContactProps) => {
  if (loading) {
    return (
      <section id="contact" className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-8 mx-auto"></div>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border">
                  <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const contact = data?.contact;
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: contact?.email || 'email@exemplo.com',
      href: `mailto:${contact?.email || 'email@exemplo.com'}`
    },
    {
      icon: Github,
      label: 'GitHub',
      value: contact?.github || 'github.com/usuario',
      href: contact?.github || '#'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: contact?.linkedin || 'linkedin.com/in/usuario',
      href: contact?.linkedin || '#'
    },
    ...(contact?.website ? [{
      icon: ExternalLink,
      label: 'Website',
      value: contact.website,
      href: contact.website
    }] : [])
  ];

  return (
    <section id="contact" className="py-16 px-6 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title text-3xl font-bold text-foreground mb-12 text-center">
          Contato
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-gradient-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated transition-smooth group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {method.label}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {method.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};