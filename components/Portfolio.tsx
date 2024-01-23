import { portfolioLastProject } from "@/sanity/sanity.utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import ContainerSM from "./ContainerSM";
import { ButtonTransparent } from "./ButtonTransparent";

export const Portfolio = async () => {
  const lastProject = await portfolioLastProject();

  return (
    <ContainerSM>
      <div className="py-8 pb-20">
        <div id="portfolio" key={lastProject._id} className="lg:relative">
          <div className="hidden md:flex max-w-fit mb-5 lg:mb-0 lg:absolute lg:top-20 lg:left-[-40px] lg:bg-myBlack/95 lg:text-white dark:bg-white/90 dark:text-myBlack p-5 lg:pl-20">
            <h2 className="font-bold text-2xl lg:text-4xl">Último Projeto</h2>
          </div>
          <Image
            src={lastProject.image}
            alt=""
            className="hidden md:flex lg:h-[110vh] lg:w-[80vw] lg:max-w-7xl lg:max-h-[700px]"
            style={{ objectFit: "cover" }}
            height={1000}
            width={1000}
            quality={100}
          />

          <div className="mt-5 lg:mt-0 lg:absolute lg:top-32 lg:right-0 bg-myBlack/95 dark:bg-white/90 text-white dark:text-myBlack lg:max-h-2/3 lg:w-[450px] px-10 py-5">
            <h3 className="font-bold md:text-xl lg:text-2xl mb-5 pt-5">
              {lastProject.name}
            </h3>

            <div className=" flex gap-6 items-center">
              <Image
                src={lastProject.client}
                alt=""
                height={60}
                width={60}
                className="rounded-full border-2 border-white"
                quality={100}
              />
              <div className="border-l pl-6 border-yellow-100 dark:border-myBlack">
                <p className="text-sm sm:text-base">{lastProject.clientName}</p>
                <p className="text-sm sm:text-end text-white/80 dark:text-myBlack/70">
                  {lastProject.role}
                </p>
              </div>
            </div>
            <hr className="my-6 dark:opacity-20 border-yellow-100 dark:border-t-myBlack" />
            <div className="text-sm sm:text-base">
              <PortableText value={lastProject.description} />
            </div>
            {lastProject.url ? (
              <div className="max-w-[180px] pt-5">
                <ButtonTransparent href={lastProject.url} label="acesse" />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </ContainerSM>
  );
};
