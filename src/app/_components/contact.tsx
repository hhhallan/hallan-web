import { Skeleton } from '@/components/ui/skeleton';
import { usePageContent } from '@/hooks/usePageContent';
import ReactMarkdown from 'react-markdown';

export const Contact = () => {
  const { getContent, isLoading } = usePageContent();

  return (
    <section id="contact">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Contact</h2>
        {isLoading ? (
          <Skeleton className="h-6 w-[500px] rounded-md bg-muted/50 dark:bg-muted/20" />
        ) : (
          <ReactMarkdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {getContent('contact')}
          </ReactMarkdown>
        )}
      </div>
    </section>
  );
};
