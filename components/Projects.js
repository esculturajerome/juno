import React from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function Projects() {
  const projects = [
    {
      name: "Romblon National Institute of Technology",
      url: "https://rnit-tesda.tech/",
      img: "/rnit.png",
    },
    {
      name: "TESDA Women's Center",
      img: "/twc.png",
      url: "https://twc.tesda.gov.ph/",
    },
    {
      name: "Junix",
      img: "/junix.png",
      url: "https://junix.netlify.app/",
    },
  ];
  return (
    <div className="py-8 lg:py-20" id="projects">
      <div className="text-center px-5  mx-5 ">
        <h2 className="text-3xl md:text-4xl font-medium text-mainTextColor lg:mb-16">
          Look on our previous Projects
        </h2>
      </div>
      <div className="px-3 lg:flex lg:flex-col text-center items-center">
        <div className="grid md:grid-cols-3 gap-4 lg:gap-8 px-4 mt-8 text-center lg:px-16 lg:w-9/12">
          {projects.map((item) => (
            <div className="flex flex-col justify-between bg-white rounded-md hover:bg-gray-50 shadow-xl shadow-shadowColor">
              <Image
                src={item.img}
                width="300"
                height="165"
                alt={item.name}
                className="rounded-t-md"
              />
              <p className="mt-4 mx-5 lg:py-6 text-mainColor-dark">
                {item.name}
              </p>
              <a
                href={item.url}
                target="_blank"
                className="bg-SecondaryColor-light rounded-lg p-4 flex justify-between m-4"
              >
                <p className="text-SecondaryColor-dark">Visit the website</p>
                <ExternalLinkIcon className="w-5 h-5 text-SecondaryColor-dark" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
