import BackButton from "@/components/ButtonLinks/BackButton";
import { getBlogPost } from "@/sanity/sanity.utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";

interface Params {
  params: {
    slug: string;
  };
}

const page = async ({ params }: Params) => {
  const post = await getBlogPost(params.slug);
  return (
    <div className="my-10">
      <div className="my-10 py-2 px-6 text-sm font-bold rounded bg-black text-white max-w-fit">
        <BackButton>Voltar</BackButton>
      </div>
      <div>
        {post.image && (
          <div>
            <Image
              src={post.image}
              alt={post.alt}
              className="max-h-[40vh] w-full shadow-2xl"
              height={250}
              width={1000}
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
      </div>
      <div className="">
        <div className="my-10 px-5 lg:px-32 break-words bg-yellow-50/50">
          <PortableText value={post?.content} components={RichTextComponents} />
        </div>
      </div>
    </div>
  );
};

export default page;
