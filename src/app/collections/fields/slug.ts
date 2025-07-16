import type { Field } from 'payload';

export const slugField = (): Field => ({
  name: 'slug',
  type: 'text',
  label: 'Slug',
  required: true,
  unique: true,
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeChange: [
      ({ value, siblingData }) => {
        if (value) return value.toLowerCase().replace(/\s+/g, '-');
        if (siblingData?.name)
          return siblingData.name.toLowerCase().replace(/\s+/g, '-');
        return value;
      },
    ],
  },
});
