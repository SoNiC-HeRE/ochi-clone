import { motion } from "framer-motion";
import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="relative cardcontainer w-1/2 h-[75vh]">
            <h1 className="card absolute flex overflow-hidden text-[#cdea68] z-[9] text-8xl -translate-x-1/2  top-1/2 -translate-y-1/2 leading-none tracking-tighter left-full">
              {"FYDE".split("").map((item, index) => (
                // eslint-disable-next-line react/jsx-key
                <motion.span className="inline-blok">{item}</motion.span>
              ))}
            </h1>
            <div className="card rounded-xl overflow-hidden w-full h-full">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </div>
          <div className="relative cardcontainer w-1/2 h-[75vh]">
            <div className="card rounded-xl overflow-hidden w-full h-full">
              <h1 className="absolute text-[#cdea68] z-[9] text-8xl translate-x-1/2  top-1/2 -translate-y-1/2 leading-none tracking-tighter right-full">
                {"VISE".split("").map((item, index) => (
                  <span>{item}</span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
