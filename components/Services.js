import React from "react";
import {
  ChartBarIcon,
  CursorClickIcon,
  PhoneIcon,
  TrendingUpIcon,
  ServerIcon,
  CodeIcon,
} from "@heroicons/react/outline";

function Services() {
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
  return (
    <div
      className="px-5 flex flex-col lg:flex-row lg:place-items-center lg:h-full"
      id="services"
    >
      <div className="mt-4 lg:pl-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl lg:font-semibold text-mainTextColor">
          ₱5,000 Per Month, 6 Months Minimum Contract
        </h2>
        <p className="mt-8 md:text-lg lg:w-9/12 text-secondaryTextColor">
          ₱7,000 down for a standard 5 page small business website. If you need
          more than that then we have to do custom pricing based on the scope of
          work, number of additional pages, and time involved.
        </p>
        <p className="mt-8 md:text-lg lg:w-9/12 text-secondaryTextColor">
          You own your domain, content, listing, and profiles.
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
  );
}

export default Services;
