import React from "react";

import { ChartBarIcon, CheckIcon } from "@heroicons/react/outline";

function Pricing() {
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
    <div
      className="mt-10 lg:mt-20 px-5 py-8 lg:flex lg:flex-col text-center items-center  max-w-[1600px] mx-auto"
      id="pricing"
    >
      <div className="relative grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 py-6 mt-8 text-center lg:px-16 lg:w-10/12">
        {pricing.map((item) => (
          <div
            className="-m-3 bg-mainBg flex flex-col  items-center rounded-md hover:bg-gray-50 shadow-xl shadow-shadowColor"
            key={item.subTitle}
          >
            <h2 className="text-xl font-medium text-SecondaryColor-dark w-full bg-SecondaryColor-light py-5 text-center">
              {item.title}
            </h2>
            <p className="py-4 text-lg text-SecondaryColor-dark font-NatsRegular">
              {item.subTitle}
            </p>
            <h2 className="text-5xl font-medium text-mainColor pt-4 lg:py-16 lg:text-7xl font-MuseoRegular">
              ₱{item.price}
              <span className="text-base">/MO</span>
            </h2>
            <ul className="py-8 lg:pb-16">
              {item.description.map((desc, i) => (
                <li
                  key={i}
                  className="text-secondaryTextColor my-2 lg:text-lg font-NatsRegular"
                >
                  <CheckIcon className="w-5 h-5 inline-block mr-2" />
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
