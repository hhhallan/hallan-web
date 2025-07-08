import ReactMarkdown from 'react-markdown';

export const Contact = () => {
  return (
    <section id="contact">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Contact</h2>

        <ReactMarkdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          content
        </ReactMarkdown>
      </div>
    </section>
  );
};
