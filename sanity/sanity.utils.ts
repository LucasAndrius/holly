import { Portfolio } from "@/types/Portfolio";
import clientConfig from "./config/client.config";
import { createClient, groq } from "next-sanity";

export async function portfolioLastProject(): Promise<Portfolio> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "portfolio"] | order(_createdAt desc) [0]{
      _id,
      _createdAt,
      name,
      "client": client.asset->url,
      clientName,
      role,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt[0]->alt,
      url,
      content
    }`,
    { next: { revalidate: 600 } }
  );
}
