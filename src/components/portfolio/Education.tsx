import { PortfolioData } from '@/hooks/usePortfolioData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationProps {
  data: PortfolioData | null;
  loading: boolean;
}

export const Education = ({ data, loading }: EducationProps) => {
  if (loading) {
    return (
      <section id="education" className="py-20 px-4 md:px-6 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6 md:mb-12">
            <Skeleton className="h-8 w-32 mx-auto mb-4" />
            <Skeleton className="h-4 w-64 mx-auto" />
          </div>
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <Card key={i} className="p-4 md:p-6">
                <div className="flex items-start gap-4">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!data?.education?.length) {
    return (
      <section id="education" className="py-20 px-4 md:px-6 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6 md:mb-12">Educação</h2>
          <p className="text-muted-foreground">
            Informações de educação não disponíveis.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="py-20 px-4 md:px-6 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Educação</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha jornada acadêmica e formação educacional
          </p>
        </div>

        <div className="space-y-6">
          {data.education.map((edu, index) => (
            <Card key={index} className="p-4 md:p-6 hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground mb-2">
                      {edu.degree}
                    </CardTitle>
                    <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                      {edu.institution}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.status && (
                        <Badge
                          variant={edu.status === 'Concluído' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {edu.status}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              {edu.description && (
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
