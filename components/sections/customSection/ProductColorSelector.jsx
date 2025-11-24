"use client";

import { useState } from "react";
import Image from "next/image";

const ProductColorSelector = () => {
  const [color, setColor] = useState("blue");

  const variants = {
    blue: "/blue.webp",
    brown: "/brown.webp",
    pink: "/pink.webp",
  };

  return (
    <div className="h-screen w-full grid grid-cols-3 place-items-center bg-gri ">
      {/* Product Image */}
      <div className="w-full h-screen relative col-span-2">
        <Image
          src={variants[color]}
          alt="product"
          fill
          className="object-cover transition-all duration-300 rounded-r-4xl"
        />
      </div>

      <div className="flex flex-col gap-4 text-center items-center col-span-1 text-gray-500">
        {/* Product Name */}
        <h1 className="text-4xl font-bold">IVO Bio</h1>
        <p>Kabin Rengi Seciniz</p>
        {/* Color Options */}
        <div className="flex gap-4">
          {Object.keys(variants).map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`w-9 h-9 rounded-full border cursor-pointer 
              ${color === c ? "ring-2 ring-offset-2 ring-gray-400" : ""}`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductColorSelector;
