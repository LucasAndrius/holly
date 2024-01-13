import { PortableTextBlock } from "sanity";

export type Portfolio = {
  _id: string;
  _createdAt: Date;
  name: string;
  client: string;
  clientName: string;
  role: string;
  description: PortableTextBlock[];
  slug: string;
  image: string;
  alt: string;
  url: string;
  content: PortableTextBlock[];
};
