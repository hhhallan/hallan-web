import { getHomepage } from '@/lib/api/homepage';

export const Contact = async () => {
  const homepage = await getHomepage();

  return (
    <section id="contact">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Contact</h2>

        <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {homepage?.others?.contact}
        </div>
      </div>
    </section>
  );
};
