import { CardBlog } from "@/components/CardBlog";
import H1 from "@/components/Titles/H1";
import { getBlog } from "@/sanity/sanity.utils";

export default async function Blog() {
  const blog = await getBlog();
  return (
    <div className="my-10">
      <H1>Blog</H1>
      <div>
        {blog.map((posts) => (
          <div key={posts._id} className="py-10">
            <CardBlog
              title={posts.name}
              slug={posts.slug}
              image={posts.image}
              alt={posts.alt}
              publishedAt={posts._createdAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
