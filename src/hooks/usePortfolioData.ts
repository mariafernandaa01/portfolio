import { useState, useEffect } from 'react';

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  profileImage?: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
    website?: string;
  };
  skills: {
    category: string;
    items: {
      name: string;
      icon?: string;
    }[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    status?: string;
    description?: string;
  }[];
  projects: {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
    image?: string;
  }[];
}

export const usePortfolioData = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  const fetchPortfolioData = async () => {
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}portfolio.json`);
      if (!res.ok) throw new Error('Erro ao carregar o JSON');
      const json: PortfolioData = await res.json();
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };
  fetchPortfolioData();
}, []);

  return { data, loading, error };
};