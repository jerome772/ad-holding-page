import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowWeWork from "@/components/HowWeWork";
import Who from "@/components/Who";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <HowWeWork />
        <Who />
        <CTA />
      </main>
    </>
  );
}
