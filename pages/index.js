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
        <meta property="og:title" content="Juno Web Services" key="title" />
        <meta
          property="og:description"
          content="We specialize developing and designing websites for organizations and businesses. Every line of code is written by hand to ensure the best performance, which helps bring in more customers to your site and gain more revenue to your business."
        />
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
