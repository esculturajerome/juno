import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Pricing from "@components/Pricing";
import Services from "@components/Services";
import WhatWeDo from "@components/WhatWeDo";
import MainSection from "@components/MainSection";
import GetInTouch from "@components/GetInTouch";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Juno Web Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainSection />
      <WhatWeDo />
      <Services />
      <Pricing />
      <GetInTouch />
      <Footer />
    </div>
  );
}
