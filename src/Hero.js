import React from "react";
import Typed from "typed.js";

const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["BTC", "PASS", "BTB", "SAAS"],
      typeSpeed: 120,
      backSpeed: 120,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="text-white">
      <div className="max-w-[800px] mx-auto w-full h-screen flex flex-col justify-center items-center mt-[-96px] gap-3 text-center">
        <p className="text-[#40F8FF] font-bold">GROWING WITH DATA ANALYTICS</p>
        <h1 className="text-4xl md:text-7xl font-bold">Grow with data</h1>
        <div>
          <p className="text-7sm md:text-3xl font-bold">
            Fast, flexible financing for{" "}
            <span className="text-gray-400" ref={el} />
          </p>
        </div>
        <div>
          <p className="text-gray-400">
            Monitor your data analytics to increase revenue for BTB, BTC, SASS &
            PASS platforms.
          </p>
        </div>
        <div>
          <button className="text-black bg-[#40F8FF] px-5 py-2 my-3 rounded font-bold hover:bg-slate-400">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
