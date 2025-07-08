import { CollectionConfig } from 'payload';
import { seoFields } from './fields/seo';
import { slugField } from './fields/slug';

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    slugField(), // Génère automatiquement le slug depuis le name
    {
      name: 'miniDescription',
      type: 'text',
      label: 'Mini Description',
      maxLength: 160,
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description complète',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Web App', value: 'web' },
        { label: 'Site Web', value: 'website' },
        { label: 'Refonte', value: 'refonte' },
        { label: 'Mobile App', value: 'mobile' },
        { label: 'API', value: 'api' },
        { label: 'Library', value: 'library' },
        { label: 'Autre', value: 'other' },
      ],
    },
    {
      name: 'webUrl',
      type: 'text',
      label: 'Lien du site',
    },
    {
      name: 'githubUrl',
      type: 'text',
      label: 'Lien GitHub',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'color',
      type: 'text',
      label: 'Couleur associée',
    },
    {
      name: 'technologies',
      type: 'array',
      label: 'Technologies',
      fields: [
        {
          name: 'tech',
          type: 'text',
        },
      ],
    },
    {
      name: 'client',
      type: 'text',
      label: 'Client',
    },
    {
      name: 'showOnHomepage',
      type: 'checkbox',
      label: 'Afficher sur la page d’accueil',
      defaultValue: false,
    },
    {
      name: 'disabled',
      type: 'checkbox',
      label: 'Désactiver ce projet',
      defaultValue: false,
    },
    {
      type: 'group',
      name: 'seo',
      label: 'SEO',
      fields: seoFields,
      admin: {
        description: 'Optimisation pour les moteurs de recherche',
      },
    },
  ],
};

export default Projects;
