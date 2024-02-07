import Container from "./Container";
import { Whatsapp } from "./svg";

export const Quote = () => {
  return (
    <Container>
      <div className="py-8 bg-myBlack dark:bg-white text-white dark:text-myBlack px-10 rounded-xl">
        <div>
          <div className="text-center">
            <h2 className="font-bold text-2xl md:text-4xl mb-5">
              Solisite seu orçamento
            </h2>
          </div>
          <ul className="flex flex-col gap-4 items-center text-center text-xs sm:text-base">
            <li>
              <a
                href="https://whatsa.me/5553999702452/?t=Ol%C3%A1,%20gostaria%20de%20realizar%20um%20or%C3%A7amento."
                className="flex items-center gap-2 bg-white text-black max-w-fit font-semibold py-3 px-10 rounded-xl"
                target="_blank"
              >
                Orçamento{" "}
                <Whatsapp className="text-xl" alt="whatsapp" name="whatsapp" />
              </a>
            </li>
            <li>
              <span className="font-semibold">E-mail: </span>
              <a id="quote" href="mailto:hollyagenciacontato@gmail.com">
                hollyagenciacontato@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};
