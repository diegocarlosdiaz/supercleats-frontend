"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const botines = [
  "/botines/adig7760/ADIG7760-1.jpeg",
  "/botines/adig7760/ADIG7760-2.jpeg",
  "/botines/adig7760/ADIG7760-3.jpeg",
  "/botines/adig7760/ADIG7760-4.jpeg",
  "/botines/adig7760/ADIG7760-5.jpeg",
  "/botines/adig7760/ADIG7760-6.jpeg",
];

export default function VerticalSlider() {
  const [image, setImage] = useState(botines[0]);
  useEffect(() => {}, [image]);

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-1 flex flex-col items-center space-y-2">
        {botines.map((img, index) => (
          <div
            key={index}
            className="relative image-container"
            onMouseEnter={() => setImage(img)}
          >
            <Image
              src={img}
              alt={`Botín ${index + 1}`}
              width={80}
              height={80}
              className="rounded shadow"
            />
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-200"></div>
          </div>
        ))}
      </div>
      <div className="col-span-10 flex justify-center items-center">
        <Image
          src={image}
          alt="Botín grande"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>
      <style jsx>{`
        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .image-container:hover .overlay {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
