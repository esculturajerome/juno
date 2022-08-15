import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Pricing from "@components/Pricing";
import Services from "@components/Services";
import WhatWeDo from "@components/WhatWeDo";
import MainSection from "@components/MainSection";
import GetInTouch from "@components/GetInTouch";
import Projects from "@components/Projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Juno Web Services</title>
        <link rel="icon" href="/juno-circle.ico" />
        <meta property="og:url" content="junowebservices.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Web Design + Development" />
      </Head>
      <Header />
      <MainSection />
      <WhatWeDo />
      <Services />
      <Pricing />
      <Projects />
      <GetInTouch />
      <Footer />
    </div>
  );
}
