export interface Homepage {
  generals: {
    role: string;
    descriptionAbout: any; // ou le type du richText
    ctas: {
      ctaProject: string;
      ctaContact: string;
    };
  };
  projectSection: {
    proTag: string;
    proTitle: string;
    proDesc: string;
  };
  others: {
    contact: any; // ou le type du richText
  };
}
