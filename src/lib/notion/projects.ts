import { Project } from '@/types/notion';
import { notionClient } from './client';

export async function getProjects(): Promise<Project[]> {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID_PROJECTS;

    if (!databaseId) {
      throw new Error('NOTION_DATABASE_ID_PROJECTS is not defined');
    }

    const response = await notionClient.databases.query({
      database_id: databaseId,
      filter: {
        property: 'disabled',
        checkbox: {
          equals: false,
        },
      },
      sorts: [
        {
          property: 'created_at',
          direction: 'ascending',
        },
      ],
    });

    return response.results.map((page: any) => {
      const properties = page.properties;

      return {
        id: page.id,
        disabled: properties.disabled.checkbox || false,
        name: properties.name.title[0]?.plain_text || 'Sans titre',
        description: properties.description.rich_text[0]?.plain_text || '',
        type: properties.type.select?.name || '',
        githubUrl: properties.github.url || '',
        webUrl: properties.url.url || '',
        color: properties.color.rich_text[0]?.plain_text || '#A07CFE',
        imageUrl:
          properties.image.files[0]?.file?.url ||
          properties.image.files[0]?.external?.url ||
          '',
        technologies: properties.technologies.multi_select.map(
          (tech: any) => tech.name
        ),
        createdAt: properties.created_at.date?.start || '',
      };
    });
  } catch (error) {
    console.log(`Error fetching projects from Notion: ${error}`);
    return [];
  }
}
