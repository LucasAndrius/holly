import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/Providers";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Container from "@/components/Container";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Holly Agência | Blog",
  description: "",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
