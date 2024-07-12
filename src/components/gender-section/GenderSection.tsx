import Image from "next/image";
import React from "react";

const images = [
  { src: "/images/men.jpg", label: "Hombre" },
  { src: "/images/kid.jpg", label: "Niño" },
  { src: "/images/girl.jpg", label: "Mujer" },
];

export default function GenderSection() {
  return (
    <div className="p-10">
      <p className="font-extrabold text-2xl pb-10">SECCIONES POR GENERO</p>

      <div className="justify-center grid grid-cols-3 gap-5">
        {images.map((item, index) => (
          <div key={item.src}>
            <Image height={1000} width={700} alt="" src={item.src} />
            <a
              href="#_"
              className="relative inline-flex items-center justify-center py-3 pl-4 pr-12 mt-4 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                {item.label}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
