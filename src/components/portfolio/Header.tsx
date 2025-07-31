import { PortfolioData } from '@/hooks/usePortfolioData';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface HeaderProps {
  data: PortfolioData | null;
  loading: boolean;
}

export const Header = ({ data, loading }: HeaderProps) => {
  if (loading) {
    return (
      <header className="py-8 px-6 bg-gradient-hero border-b border-border">
        <div className="container mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/3 mb-2"></div>
            <div className="h-6 bg-muted rounded w-1/4"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="py-8 px-6 bg-gradient-hero border-b border-border">
      <div className="container mx-auto flex items-center gap-6">
        <Avatar className="h-40 w-40">
          <AvatarImage src={data?.profileImage} alt={data?.name} />
          <AvatarFallback className="text-2xl">
            {data?.name?.charAt(0) || 'U'}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2 transition-smooth hover:text-primary">
            {data?.name || '{{NAME_PLACEHOLDER}}'}
          </h1>
          <p className="text-lg text-muted-foreground">
            {data?.role || '{{ROLE_PLACEHOLDER}}'}
          </p>
        </div>
      </div>
    </header>
  );
};