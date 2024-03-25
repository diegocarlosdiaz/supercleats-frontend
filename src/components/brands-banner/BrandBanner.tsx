"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Progress } from "@mantine/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import '../../app/globals.scss'

interface BrandsResponse {
  marca: string;
  logo: string;
}

export default function BrandBanner() {
  const [brands, setBrands] = useState<BrandsResponse[]>([]);
  const fetchBrands = async () => {
    try {
      const response = await axios.get<BrandsResponse[]>(
        "http://localhost:8080/api/v1/marcas"
      );
      setBrands(response.data);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };
  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <>
      <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }} 
        slidesPerView={5}
        spaceBetween={30}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {brands.map((b) => (
          <SwiperSlide>
            <div className="flex flex-row p-20 items-end content-start">
              <div key={b.marca} className="px-6">
                <Image src={b.logo} alt={b.marca} width={150} height={150} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
