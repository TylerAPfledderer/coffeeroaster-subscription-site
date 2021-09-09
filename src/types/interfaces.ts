/**
 * Signature for the query of image paths matching section data
 */
export interface ImagesQuery {
  nodes: Array<{
    id: number;
    publicURL: string;
    name: string;
  }>;
}

/**
 * Query signature for the section data that includes images
 */
export interface SectionInfoJson {
  nodes: Array<{
    id: number;
    image?: string;
    icon?: string;
    title: string;
    description: string;
  }>;
}
