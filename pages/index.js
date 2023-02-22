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
  // Introducing Jerome Escultura, a highly qualified individual with a Master's degree in Information Technology and a wealth of experience in the field. With 5 years of experience as a web consultant, Jerome has honed his skills in delivering innovative and effective web solutions to clients from various industries. He has a deep understanding of the latest technologies and trends in the web development landscape, which he leverages to provide his clients with cutting-edge and highly functional websites. Whether you're looking for a new website, an upgrade to your existing one, or simply need advice on how to take your online presence to the next level, Jerome is the right person for the job. Get in touch with him today to experience the best in web consulting!
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
        <meta
          property="og:image"
          content="https://junowebservices.com/juno-og.png"
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
