import { getHomepage } from '@/lib/api/homepage';

export const About = async () => {
  const homepage = await getHomepage();

  return (
    <section id="about">
      <h2 className="text-xl font-bold">À propos</h2>

      <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        {homepage?.generals?.descriptionAbout}
      </div>
    </section>
  );
};
