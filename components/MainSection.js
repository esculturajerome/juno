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
  return (
    <div
      className="h-screen/3/4 grid place-items-center"
      ref={vantaRef}
      id="main"
    >
      <div className="px-3 md:px-16 lg:w-8/12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-mainTextColor">
          Small Business <br />
          Web Design + Development
        </h2>
        <p className="py-5 md:text-lg md:w-10/12 lg:pb-16 text-secondaryTextColor">
          No page builders or WordPress - We offer 100% hand-coded websites with
          superior results starting at ₱5,000/month.
        </p>
        <Link to="contact" smooth={true} duration={1000}>
          <Button text="Get in touch" />
        </Link>
      </div>
    </div>
  );
}
