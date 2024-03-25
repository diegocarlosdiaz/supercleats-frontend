import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

const images = [
  "/banners/adidas-banner.jpg",
  "/banners/neymar-banner.jpg",
  "/banners/nike-banner.jpg",
  "/banners/puma-banner.jpg",
  "/banners/kaiser.jpg",
];

export default function Imagescarousel() {
  return (
    <>
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {images.map((item) => (
            <SwiperSlide className="">
              <Image src={item} alt={""} width={700} height={350} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </>
  );
}
