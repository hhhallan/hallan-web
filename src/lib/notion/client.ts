import { Client } from '@notionhq/client';

if (!process.env.NOTION_API_KEY) {
  throw new Error('NOTION_API_KEY is not defined');
}

export const notionClient = new Client({
  auth: process.env.NOTION_API_KEY,
});