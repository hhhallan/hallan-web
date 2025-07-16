import { Project } from '@/types/project';
import configPromise from '@payload-config';
import { getPayload } from 'payload';

export async function getProjects(): Promise<Project[]> {
  try {
    const payload = await getPayload({
      config: configPromise,
    });

    const projects = await payload.find({
      collection: 'projects',
      where: {
        disabled: {
          not_equals: true,
        },
      },
    });

    return projects.docs as unknown as Project[];
  } catch (error) {
    console.error('Erreur lors de la récupération des projets:', error);
    throw error;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const payload = await getPayload({
      config: configPromise,
    });

    const projects = await payload.find({
      collection: 'projects',
      where: {
        slug: {
          equals: slug,
        },
        disabled: {
          not_equals: true,
        },
      },
    });

    return (projects.docs[0] as unknown as Project) || null;
  } catch (error) {
    console.error('Erreur lors de la récupération du projet:', error);
    return null;
  }
}
