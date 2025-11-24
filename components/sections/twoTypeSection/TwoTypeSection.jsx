"use client";

import { useState } from "react";
import Image from "next/image";

const TwoTypeSection = () => {
  const [hover, setHover] = useState(null);

  return (
    <div className="h-screen w-full">
      <div className="grid grid-cols-10 h-full transition-all duration-500">
        {/* LEFT SIDE */}
        <div
          className={`
            relative transition-all duration-500
            ${
              hover === "left"
                ? "col-span-7"
                : hover === "right"
                ? "col-span-3"
                : "col-span-5"
            }
          `}
          onMouseEnter={() => setHover("left")}
          onMouseLeave={() => setHover(null)}
        >
          <Image src="/blue.webp" alt="blue" fill className="object-cover" />

          {hover === "left" && (
            <div className="absolute bottom-4 left-4 p-8 max-w-sm bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-lg text-kahverengi select-none">
              <p className="font-extrabold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
                tempora ratione nihil cum iure totam similique illo optio.
                Libero dignissimos dicta laudantium? Earum laborum quasi
                eligendi corporis rerum, hic excepturi.
              </p>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`
            relative transition-all duration-500
            ${
              hover === "right"
                ? "col-span-7"
                : hover === "left"
                ? "col-span-3"
                : "col-span-5"
            }
          `}
          onMouseEnter={() => setHover("right")}
          onMouseLeave={() => setHover(null)}
        >
          <Image src="/pink.webp" alt="pink" fill className="object-cover" />
          {hover === "right" && (
            <div className="absolute bottom-4 right-4 p-8 max-w-sm bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-lg text-kahverengi select-none">
              <p className="font-extrabold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
                tempora ratione nihil cum iure totam similique illo optio.
                Libero dignissimos dicta laudantium? Earum laborum quasi
                eligendi corporis rerum, hic excepturi.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TwoTypeSection;
