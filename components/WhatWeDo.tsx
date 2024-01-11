import { Cinzel_Decorative } from "next/font/google";
import { Walking } from "./svg";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: "900",
});

export const WhatWeDo = () => {
  return (
    <div className="md:grid md:grid-cols-[60%_40%] sm:gap-8 py-12">
      <div>
        <h1
          className={`font-bold text-6xl mb-5 ${cinzel_decorative.className}`}
        >
          Somos a Holly
        </h1>
        <p className="py-2">
          Ter bom posicionamento digital através de um site é essencial para
          todas as empresas que desejam ampliar seu público ou construir
          confiança com seus clientes. A Holly cria sites customizados,
          responsivos e otimizados para os mecanismos de busca, ajudando a sua
          empresa a aumentar a visibilidade de seus produtos ou serviços.
        </p>
        <p className="py-2">
          Entre em contato e descubra como podemos ajudá-lo a construir o seu
          posicionamento digital!
        </p>
      </div>
      <div className="flex justify-center">
        <img src="./notebook.jpg" alt="" className="rounded-xl" />
      </div>
    </div>
  );
};
