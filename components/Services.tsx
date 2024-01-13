import Container from "./Container";
import { Analytics, Blog, Internet, Site } from "./svg";

export const Services = () => {
  return (
    <Container>
      <div className="py-8">
        <div className="flex flex-col items-center md:flex-row justify-between font-semibold w-full">
          <div className="max-w-72 flex flex-col items-center mb-8">
            <Site width={150} height={150} className="mb-2" />
            <div>
              <p>Criação de Site</p>
            </div>
          </div>
          <div className="max-w-72 flex flex-col items-center mb-8">
            <Blog width={150} height={150} className="mb-2" />
            <div>
              <p>Design Responsivo</p>
            </div>
          </div>
          <div className="max-w-72 flex flex-col items-center mb-8">
            <Internet width={150} height={150} className="mb-2" />
            <div>
              <p>Presença Digital</p>
            </div>
          </div>
          <div className="max-w-72 flex flex-col items-center mb-8">
            <Analytics width={150} height={150} className="mb-2" />
            <div>
              <p>Otimização para SEO</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
