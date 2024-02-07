import Image from "next/image";
import Link from "next/link";
import H4 from "./Titles/H4";

type Props = {
  title: string;
  slug: string;
  image: string;
  alt: string;
  publishedAt: any;
};

export const CardBlog = (props: Props) => {
  return (
    <div className="relative shadow-2xl">
      <div className="absolute bg-black/85 text-white py-3 px-6 z-10 top-3 left-3 w-fit max-w-[450px]">
        <H4>{props.title}</H4>
      </div>
      <div className="absolute text-xs bg-black/85 text-white py-3 px-6 z-10 top-3 right-3">
        {new Date(props.publishedAt)
          .toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
          .replace(/de/g, "")}
      </div>
      <Link href={`/blog/${props.slug}`}>
        <Image
          src={props.image}
          alt={props.alt}
          className="bg-yellow-400 max-h-[40vh] rounded-md"
          width={1200}
          height={1200}
          style={{ objectFit: "cover" }}
        />
      </Link>
    </div>
  );
};
