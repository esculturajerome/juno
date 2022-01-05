import Head from "next/head";
import Header from "@components/Header";
import Button from "@components/Button";
import MyTabs from "@components/MyTabs";
import { useEffect, useRef, useState } from "react";
import net from "vanta/dist/vanta.net.min";
import * as THREE from "three";

import {
  SupportIcon,
  ChartBarIcon,
  CursorClickIcon,
  PhoneIcon,
  TrendingUpIcon,
  ServerIcon,
  CodeIcon,
  DeviceMobileIcon,
  DesktopComputerIcon,
  ColorSwatchIcon,
  LightningBoltIcon,
  CheckIcon,
} from "@heroicons/react/outline";
import Footer from "@components/Footer";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        net({
          el: vantaRef.current,
          THREE,
          color: 0xffbd8f,
          backgroundColor: 0xfafcff,
          points: 12.0,
          maxDistance: 10.0,
          spacing: 12.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const PrimaryServices = [
    {
      name: "Mobile-First Design",
      description:
        "We start building your site for mobile devices first, then we add on to it to make tablet and desktop.",
      icon: DeviceMobileIcon,
    },
    {
      name: "Fully Responsive",
      description:
        "Your website will fit all mobile screens sizes, tablets, and desktop sizes so new clients can access your site from anywhere.",
      icon: ColorSwatchIcon,
    },
    {
      name: "Optimization",
      description:
        "60% of all internet traffic is on mobile devices, so we optimize your mobile to perform their best in search engines.",
      icon: LightningBoltIcon,
    },
  ];

  const services = [
    {
      name: "Hosting Fees Included",
      description: "Hosting fees are built right into the monthly payment.",
      icon: ServerIcon,
    },
    {
      name: "Unlimited Edits",
      description:
        "Change anything you want at anytime and it will be done that day.",
      icon: CursorClickIcon,
    },
    {
      name: "Customer Service",
      description:
        "Call direct anytime day or night, no phone trees or automated responses.",
      icon: PhoneIcon,
    },
    {
      name: "Web Design & Development",
      description:
        "Includes over 40 hours of design, development, and testing.",
      icon: CodeIcon,
    },
    {
      name: "Citations And Listings",
      description:
        "It's important to have your website linked from other websites, like directories.",
      icon: TrendingUpIcon,
    },
    {
      name: "Google Analytics",
      description:
        "We install Analytics for free to monitor traffic and where it comes from.",
      icon: ChartBarIcon,
    },
  ];

  const porfolios = [
    {
      name: "Valley Construction",
      description:
        "Valley Construction Supply is the largest privately held construction supply company in Seattle, WA for over 35 years. ",
      link: "jescultura.com",
      icon: ChartBarIcon,
    },
    {
      name: "AB's Hillbilly Gyros",
      description:
        "AB's Hillbilly Gyros is a local fusion gyros restaurant that opened in 2018, we made their first website. ",
      link: "jescultura.com",
      icon: ChartBarIcon,
    },
    {
      name: "Dr. Victoria Chan",
      description:
        "Dr. Victoria Chan is a Naturopathic Doctor based in California who offers a holsitic approach to mental health.",
      link: "jescultura.com",
      icon: ChartBarIcon,
    },
  ];

  const pricing = [
    {
      title: "Standard",
      subTitle: "5 Pages",
      price: "5,000",
      description: [
        "Unlimited Edits",
        "Includes Hosting",
        "Customer Service",
        "Lifetime Updates",
      ],
      link: "jescultura.com",
      icon: ChartBarIcon,
    },
    {
      title: "Standard + Blogging",
      subTitle: "Starting at",
      price: "7000",
      description: [
        "1000+ Word Post",
        "Written By an SEO Specialist",
        "1 Post Per Month",
        "₱2000 Per Extra Post",
      ],
      link: "jescultura.com",
      icon: ChartBarIcon,
    },
    {
      title: "Logos & Graphic Design",
      subTitle: "Included!",
      price: "0",
      description: [
        "2 revisions",
        "All File Formats",
        "Ready to use",
        "FREE w/ Subscription",
      ],
      link: "jescultura.com",
      icon: ChartBarIcon,
    },
  ];

  return (
    <div>
      <Head>
        <title>Grey Web Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="h-screen/3/4 grid place-items-center" ref={vantaRef}>
          <div className="px-3 md:px-16 lg:w-8/12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-mainTextColor">
              Small Business <br />
              Web Design + Development
            </h2>
            <p className="py-5 md:text-lg md:w-10/12 lg:pb-16 text-secondaryTextColor">
              No page builders or WordPress - We offer 100% hand-coded websites
              with superior results starting at ₱5,000/month.
            </p>
            <Button text="Get in touch" />
          </div>
        </div>

        <div className="bg-gradient-to-b from-mainBg to-secondaryBg py-20 lg:h-full">
          <div className="text-center px-5 mb-10">
            <h2 className="text-3xl md:text-4xl font-medium mb-5 text-mainTextColor">
              What we do
            </h2>
            <p className="md:text-lg lg:px-72 text-secondaryTextColor">
              We specialize in small business web design and development for
              clients anywhere in the Philippines. Every line of code is written
              by hand to ensure the best performance, which helps bring in more
              customers to your site and bring more revenue to your business.
            </p>
          </div>
          <div className="lg:flex lg:flex-col items-center">
            <div className="relative grid md:grid-cols-3 gap-10 px-4 py-6 lg:py-16 lg:mt-16 mt-8 text-center lg:place-items-center lg:w-8/12">
              {PrimaryServices.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col place-items-center "
                >
                  <item.icon
                    className="h-16 w-16 text-mainColor-dark bg-white p-3 rounded-full shadow-xl shadow-shadowColor mb-4"
                    aria-hidden="true"
                  />
                  <h2 className="text-xl font-medium py-3 text-mainTextColor">
                    {item.name}
                  </h2>
                  <p className="text-secondaryTextColor">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="px-5 flex flex-col lg:flex-row lg:place-items-center lg:h-full">
            <div className="mt-4 lg:pl-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl lg:font-semibold text-mainTextColor">
                ₱5,000 Per Month, 6 Months Minimum Contract
              </h2>
              <p className="mt-8 md:text-lg lg:w-9/12 text-secondaryTextColor">
                ₱8,000 down for a standard 5 page small business website. If you
                need more than that then we have to do custom pricing based on
                the scope of work, number of additional pages, and time
                involved.
              </p>
              <p className="mt-8 md:text-lg lg:w-9/12 text-secondaryTextColor">
                You own your domain, content, listing, and profiles. Cancel
                anytime with no fees or hassle.
              </p>
            </div>
            <div className="relative grid gap-8 px-4 py-6 mt-8 md:grid-cols-3">
              {services.map((item) => (
                <div
                  key={item.name}
                  href={item.href}
                  className="-m-3 py-10 px-6 bg-white flex md:flex-col items-start md:items-center md:text-center rounded-lg hover:bg-gray-50 shadow-xl shadow-shadowColor"
                >
                  <item.icon
                    className="flex-shrink-0 h-10 w-10 text-SecondaryColor"
                    aria-hidden="true"
                  />
                  <div className="ml-4 md:ml-0 md:mt-8">
                    <p className="md:text-xl font-medium text-mainTextColor">
                      {item.name}
                    </p>
                    <p className="md:text-lg mt-1 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-20 px-5 py-8 lg:flex lg:flex-col text-center items-center ">
            <div className="relative grid md:grid-cols-3 gap-10 px-4 py-6 mt-8 text-center lg:px-16 lg:w-10/12">
              {pricing.map((item) => (
                <div
                  key={item.title}
                  className="-m-3 bg-white flex flex-col  items-center rounded-xl hover:bg-gray-50 shadow-xl shadow-shadowColor"
                >
                  <h2 className="text-xl font-medium text-SecondaryColor-dark w-full bg-SecondaryColor-light rounded-t-xl py-5 text-center">
                    {item.title}
                  </h2>
                  <p className="py-4 text-lg text-SecondaryColor-dark">
                    {item.subTitle}
                  </p>
                  <h2 className="text-5xl font-medium text-mainColor pt-4 lg:py-16 lg:text-7xl">
                    ₱{item.price}
                    <span className="text-base">/MO</span>
                  </h2>
                  <ul className="py-8 lg:pb-16">
                    {item.description.map((desc) => (
                      <li className="text-secondaryTextColor my-2 lg:text-lg">
                        <CheckIcon className="w-5 h-5 inline-block mr-2" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
