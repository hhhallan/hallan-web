export type Project = {
  id: string;
  name: string;
  miniDescription: string;
  description: string;
  type: string;
  client?: string;
  color: string;
  technologies: string[];
  slug: string;
  showOnHomepage: boolean;
  disabled: boolean;
  webUrl?: string;
  githubUrl?: string;
  image?: {
    url: string;
    alt?: string;
  };
};
