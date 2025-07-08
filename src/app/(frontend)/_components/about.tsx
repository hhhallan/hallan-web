import ReactMarkdown from 'react-markdown';

export const About = () => {
  return (
    <section id="about">
      <h2 className="text-xl font-bold">À propos</h2>

      <ReactMarkdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        about
      </ReactMarkdown>
    </section>
  );
};
