import { ContentMap } from '@/types/notion';
import { useEffect, useState } from 'react';

export function usePageContent() {
  const [content, setContent] = useState<ContentMap>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchContent() {
    try {
      setIsLoading(true);
      const response = await fetch('/api/content');
      
      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }
      
      const data = await response.json();
      setContent(data.content);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchContent();
  }, []);

  // Helper pour récupérer du contenu avec une valeur par défaut
  const getContent = (key: string, defaultValue: string = ''): string => {
    return content[key] || defaultValue;
  };

  return { content, getContent, isLoading, error, refetch: fetchContent };
}