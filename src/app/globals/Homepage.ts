import { GlobalConfig } from 'payload';

const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Page d’accueil',
  fields: [
    {
      name: 'generals',
      label: 'Infos générales',
      type: 'group',
      fields: [
        {
          name: 'role',
          label: 'Rôle actuel',
          type: 'text',
        },
        {
          name: 'descriptionAbout',
          label: 'Description sur moi',
          type: 'textarea',
        },
        {
          name: 'ctas',
          label: 'Les boutons',
          type: 'group',
          fields: [
            {
              name: 'ctaProject',
              label: 'Bouton projets',
              type: 'text',
            },
            {
              name: 'ctaContact',
              label: 'Bouton contact',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'projectSection',
      label: 'Les projets',
      type: 'group',
      fields: [
        {
          name: 'proTag',
          label: 'Tag',
          type: 'text',
        },
        {
          name: 'proTitle',
          label: 'Titre',
          type: 'text',
        },
        {
          name: 'proDesc',
          label: 'Description',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'others',
      label: 'Autre',
      type: 'group',
      fields: [
        {
          name: 'contact',
          label: 'Contact',
          type: 'textarea',
        },
      ],
    },
  ],
};

export default Homepage;
