import React from "react";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import net from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { Link } from "react-scroll";

export default function MainSection() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        net({
          el: vantaRef.current,
          THREE,
          color: 0xffbd8f,
          backgroundColor: 0xf7f8f2,
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
  return (
    <div
      className="h-screen/3/4 grid place-items-center bg-mainBg"
      ref={vantaRef}
      id="main"
    >
      <div className="px-3 md:px-16 lg:w-10/12 max-w-[1600px] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium text-mainTextColor font-MuseoRegular">
          Web Design <span className="text-mainColor font-bold">+ </span>
          <br />
          Development
        </h2>
        <p className="py-5 md:text-xl md:w-6/12 lg:pb-16 text-secondaryTextColor ">
          No page builders or WordPress needed. We offer 100% hand-coded
          websites with superior results, starting at ₱5,000/month!
        </p>
        <Link to="contact" smooth={true} duration={1000}>
          <Button text="Get in touch" />
        </Link>
      </div>
    </div>
  );
}
