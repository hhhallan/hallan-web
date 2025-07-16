import type { Field } from 'payload';

export const seoFields: Field[] = [
  {
    name: 'title',
    type: 'text',
    label: 'Titre SEO',
    maxLength: 60,
  },
  {
    name: 'description',
    type: 'textarea',
    label: 'Meta description',
    maxLength: 160,
  },
  {
    name: 'keywords',
    type: 'text',
    label: 'Mots-clés (séparés par des virgules)',
  },
];
