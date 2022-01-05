import Head from "next/head";
import Header from "@components/Header";
import { ChartBarIcon } from "@heroicons/react/outline";
import Footer from "@components/Footer";
import Pricing from "@components/Pricing";
import Services from "@components/Services";
import WhatWeDo from "@components/WhatWeDo";
import MainSection from "@components/MainSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grey Web Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainSection />
      <WhatWeDo />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}
