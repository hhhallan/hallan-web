export interface Project {
    id: string;
    disabled: boolean;
    name: string;
    description: string;
    type: string;
    webUrl?: string;
    githubUrl?: string;
    color: string;
    technologies: string[];
    imageUrl?: string;
    createdAt: string;
}

export interface PageContent {
    id: string;
    key: string;
    text: string;
}

export type ContentMap = Record<string, string>;