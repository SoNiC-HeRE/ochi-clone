import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="text-structure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76,0,0.24,1], duration: 1}} className="w-[8.5vw] h-[6.5vw] relative top-[1vw] bg-red-500 mr-[1vw] rounded-md"></motion.div>
                )}
                <h1 className="uppercase text-[8.5vw] leading-[6.5vw] tracking-wide font-['Test_Founders_Grotesk_X_Condensed']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] flex justify-between items-center py-5 px-20 border-zinc-800 mt-28">
        {["For Public and private companies", "From first pitch to IPO"].map(
          (item, index) => (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-3">
          <div className="px-5 py-2 border-[2px] border-zinc-500 font-light text-sm uppercase rounded-full">
            Start the Project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
