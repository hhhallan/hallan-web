import { ContentMap, PageContent } from '@/types/notion';
import { notionClient } from './client';

export async function getPageContents(): Promise<PageContent[]> {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID_PAGE;
    
    if (!databaseId) {
      throw new Error('NOTION_DATABASE_ID_PAGE is not defined');
    }

    const response = await notionClient.databases.query({
      database_id: databaseId,
    });

    return response.results.map((page: any) => {
      const properties = page.properties;
      
      return {
        id: page.id,
        key: properties.key.title[0]?.plain_text || '',
        text: properties.texte.rich_text[0]?.plain_text || '',
      };
    });
  } catch (error) {
    console.error('Error fetching page contents from Notion:', error);
    return [];
  }
}

export async function getContentMap(): Promise<ContentMap> {
  const contents = await getPageContents();
  
  // Transforme le tableau en objet avec key comme clé et texte comme valeur
  return contents.reduce((map, content) => {
    map[content.key] = content.text;
    return map;
  }, {} as ContentMap);
}