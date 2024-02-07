import { Cinzel_Decorative } from "next/font/google";
import { Walking } from "./svg";
import Image from "next/image";
import Container from "./Container";
import H1 from "./Titles/H1";
import logoHolly from "@/public/Logo_Holly_Agencia.png";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: "900",
});

export const WhatWeDo = () => {
  return (
    <Container>
      <div className="">
        <div className="flex flex-col items-center ">
          <H1>
            <Image
              src={logoHolly}
              alt=""
              className="max-h-40 my-5"
              height={384}
              width={1024}
              quality={100}
              style={{ objectFit: "contain" }}
            />
          </H1>
          <div className="max-w-[720px]">
            <p className="py-2">
              Ter bom posicionamento digital através de um site é essencial para
              todas as empresas que desejam ampliar seu público ou construir
              confiança com seus clientes. A Holly cria sites customizados,
              responsivos e otimizados para os mecanismos de busca, ajudando a
              sua empresa a aumentar a visibilidade de seus produtos ou
              serviços.
            </p>
            <p className="py-2">
              Entre em contato e descubra como podemos ajudá-lo a construir o
              seu posicionamento digital!
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
