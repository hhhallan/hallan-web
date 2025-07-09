import { Homepage } from '@/types/homepage';
import configPromise from '@payload-config';
import { getPayload } from 'payload';

export async function getHomepage(): Promise<Homepage> {
  try {
    const payload = await getPayload({
      config: configPromise,
    });

    const homepage = await payload.findGlobal({
      slug: 'homepage',
    });

    return homepage as unknown as Homepage;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de la page d'accueil:",
      error
    );
    throw error;
  }
}
