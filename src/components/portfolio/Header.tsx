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
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6 text-center md:text-left">
        
        {/* Avatar menor no mobile, grande em md+ */}
        <Avatar className="h-24 w-24 md:h-40 md:w-40">
          <AvatarImage src={data?.profileImage} alt={data?.name} />
          <AvatarFallback className="text-xl md:text-2xl">
            {data?.name?.charAt(0) || 'U'}
          </AvatarFallback>
        </Avatar>
        
        <div>
          {/* Tamanho de fonte responsivo */}
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 whitespace-nowrap">
            {data?.name || '{{NAME_PLACEHOLDER}}'}
          </h1>
          <p className="text-base md:text-lg text-white">
            {data?.role || '{{ROLE_PLACEHOLDER}}'}
          </p>
        </div>
      </div>
    </header>
  );
};
