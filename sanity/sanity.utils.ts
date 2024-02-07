import { Portfolio } from "@/types/Portfolio";
import clientConfig from "./config/client.config";
import { createClient, groq } from "next-sanity";
import { BlogPosts } from "@/types/BlogPosts";

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
      "alt": image.alt,
      url,
      content
    }`,
    { next: { revalidate: 600 } }
  );
}

export async function getBlog(): Promise<BlogPosts[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog"] | order(_createdAt desc){
      _id,
      _createdAt,
      name,
      "client": client.asset->url,
      clientName,
      role,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      url,
      content
    }`,
    { next: { revalidate: 600 } }
  );
}

export async function getBlogPost(slug: string): Promise<BlogPosts> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      url,
      content,
      category[]->,
    }`,
    { slug, next: { revalidate: 600 } }
  );
}
