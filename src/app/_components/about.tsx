import { Skeleton } from '@/components/ui/skeleton';
import { usePageContent } from '@/hooks/usePageContent';
import ReactMarkdown from 'react-markdown';

export const About = () => {
  const { getContent, isLoading } = usePageContent();

  return (
    <section id="about">
      <h2 className="text-xl font-bold">À propos</h2>
      {isLoading ? (
        <>
          <Skeleton className="h-6 w-[500px] rounded-md bg-muted/50 dark:bg-muted/20 mt-2" />
          <Skeleton className="h-6 w-[400px] rounded-md bg-muted/50 dark:bg-muted/20 mt-2" />
          <Skeleton className="h-6 w-[300px] rounded-md bg-muted/50 dark:bg-muted/20 mt-2" />
        </>
      ) : (
        <ReactMarkdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {getContent('about')}
        </ReactMarkdown>
      )}
    </section>
  );
};
