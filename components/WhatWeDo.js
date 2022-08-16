import React from "react";
import {
  DeviceMobileIcon,
  ColorSwatchIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

function WhatWeDo() {
  const PrimaryServices = [
    {
      name: "Mobile-First Design",
      description:
        "We start building your site for mobile devices first before proceeding to making tablet and desktop versions.",
      icon: DeviceMobileIcon,
    },
    {
      name: "Fully Responsive",
      description:
        "Your website will be responsive on all screen sizes for best experience.",
      icon: ColorSwatchIcon,
    },
    {
      name: "Optimization",
      description:
        "We optimize your website for mobile device to perform their best in search engines because 60% of the internet traffic is on mobile devices.",
      icon: LightningBoltIcon,
    },
  ];
  return (
    <div
      className="bg-gradient-to-b from-mainBg to-secondaryBg py-20 lg:h-full"
      id="whatWeDo"
    >
      <div className="text-center px-5 mb-10 max-w-[1600px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium mb-5 text-mainTextColor ">
          What we do
        </h2>
        <p className="md:text-lg lg:px-72 text-secondaryTextColor">
          We specialize developing and designing websites for organizations and
          businesses. Every line of code is written by hand to ensure the best
          performance, which helps bring in more customers to your site and gain
          more revenue to your business.
        </p>
      </div>
      <div className="lg:flex lg:flex-col items-center max-w-[1600px] mx-auto">
        <div className="relative grid md:grid-cols-3 gap-10 px-4 lg:px-0 py-6 lg:py-16 lg:mt-16 mt-8 text-center lg:place-items-center lg:w-8/12">
          {PrimaryServices.map((item) => (
            <div key={item.name} className="flex flex-col place-items-center ">
              <item.icon
                className="h-16 w-16 text-mainColor bg-white p-2 rounded-full shadow-xl shadow-shadowColor mb-4"
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
  );
}

export default WhatWeDo;
