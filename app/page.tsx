import Container from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Portfolio } from "@/components/Portfolio";
import { Quote } from "@/components/Quote";
import { Services } from "@/components/Services";
import { WhatWeDo } from "@/components/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Header />
      <WhatWeDo />
      <Services />
      <Portfolio />
      <Quote />
      <Footer />
    </div>
  );
}
