import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Holly Agência",
  description:
    "A Holly cria sites customizados, responsivos e otimizados para os mecanismos de busca, ajudando seus clientes a aumentar a visibilidade de seus produtos ou serviços.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className="container max-w-[1440px] mx-auto scroll-smooth"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PGNJM94J')`,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-myYellow/5 text-myBlack dark:bg-myDarkGreen/5 dark:text-white`}
      >
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PGNJM94J"
          height="0"
          width="0"
        ></iframe>
        {/*  <ThemeProvider attribute="class"> */}
        <div>{children}</div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
