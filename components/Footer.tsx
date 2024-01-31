import Container from "./Container";
import { Copyright } from "./svg";

export const Footer = () => {
  return (
    <Container>
      <footer className="pt-16 pb-8">
        <div className="">
          <div>
            <p className="flex justify-center font-semibold text-xs sm:text-base">
              Todos os direitos reservados{" "}
              <span className="flex items-center px-1">
                <Copyright />
              </span>
              2023
            </p>
          </div>
        </div>
      </footer>
    </Container>
  );
};
