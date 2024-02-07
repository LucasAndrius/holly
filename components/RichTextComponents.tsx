import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { Merriweather, Yeseva_One } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "400",
});

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="flex flex-col items-center py-10">
        <Image
          src={urlForImage(value).url()}
          alt={value}
          className="max-w-[50vw] h-auto"
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>
    ),
  },
  lists: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">
        <li>{children}</li>
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">
        <li>{children}</li>
      </ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1
        className={` text-3xl md:text-6xl py-10 text-center ${merriweather.className}`}
      >
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-xl font-semibold md:text-4xl py-10 uppercase">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="md:text-2xl py-10 uppercase">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="font-semibold md:text-xl py-10">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="italic md:text-xl py-10">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="md:text-xl border-b-2 pb-1 max-w-fit border-myBlack py-10">
        {children}
      </h6>
    ),
    blockquote: ({ children }: any) => (
      <div className="py-5">
        <blockquote className="border-l-myBlueHover border-l-4 ml-[10vw] md:ml-[15vw] pl-5 py-5 my-5">
          {children}
        </blockquote>
      </div>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="font-semibold underline"
          target="_blank"
        >
          {children}
        </Link>
      );
    },
  },
};
