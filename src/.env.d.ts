declare namespace NodeJS {
  interface ProcessEnv {
    NOTION_API_KEY: string;
    NOTION_DATABASE_ID_PAGE: string;
    NOTION_DATABASE_ID_PROJECTS: string;
    ADMIN_PASSWORD: string;
  }
}