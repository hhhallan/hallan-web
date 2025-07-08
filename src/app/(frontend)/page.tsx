
import { About } from './_components/about';
import { Contact } from './_components/contact';
import { Hero } from './_components/hero';
import { Projects } from './_components/projects';

const RootPage = () => {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10 pb-[75px]">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default RootPage;
