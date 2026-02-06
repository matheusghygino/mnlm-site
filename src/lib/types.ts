export interface Activity {
  title: string;
  slug: string;
  lead: string;
  content: string;
  publishedAt: string;
  image?: {
    url: string;
    alternativeText?: string;
  };
}
