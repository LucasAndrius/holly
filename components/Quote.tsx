export const Quote = () => {
  return (
    <div className="py-12 bg-myBlack dark:bg-white text-white dark:text-myBlack px-10 rounded-xl">
      <div className="">
        <div className="text-center">
          <h2 className="font-bold text-2xl md:text-4xl mb-5">
            Solisite seu orçamento
          </h2>
        </div>
        <ul className="text-center text-xs sm:text-base">
          <li>
            <span className="font-semibold">E-mail: </span>
            <a id="quote" href="mailto:hollyagenciacontato@gmail.com">
              hollyagenciacontato@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
