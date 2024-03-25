import Image from "next/image";
import React from "react";

export default function FirstBanner() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 p-20 absolute text-white">
        <div className="pr-10 mt-20">
          <p className="text-4xl font-black">REBAJAS HASTA 50% OFF</p>
          <p className="py-5">
            Aprovechá descuentos increíbles de hasta 40% off en el outlet y pagá
            hasta 3 cuotas sin interés en compras superiores a $60.000
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              IR AL OUTLET
            </span>
          </button>
        </div>
      </div>
      <Image
        src="/messi-miami2.jpg"
        alt="banner"
        width={10000}
        height={200}
      />
    </div>
  );
}
