import React from "react";
import { ChartBarIcon } from "@heroicons/react/outline";

function Porfolios() {
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
  return <div>Porfolios</div>;
}

export default Porfolios;
