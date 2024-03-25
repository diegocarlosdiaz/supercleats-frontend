import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../product-card/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

interface BotinesResponse {
  nombre: string;
  color: string;
  precio: string;
  tipo: string;
  detalle: string;
  imagen: string;
  marcas: [];
  generos: [];
  talles: [];
  imagenes: [];
}

function ProductsCarousel() {
  const [botines, setBotines] = useState<BotinesResponse[]>([]);
  const swiperStyles: Record<string, string> = {
    "--swiper-navigation-size": "25px",
    "--swiper-navigation-top-offset": "50%",
    "--swiper-navigation-sides-offset": "10px",
    "--swiper-navigation-color": "black",
    "--swiper-pagination-color": "black",
  };

  const getBotines = async () => {
    try {
      const response = await axios.get<BotinesResponse[]>(
        "http://localhost:8080/api/v1/botines"
      );
      setBotines(response.data);
    } catch (error) {
      console.error;
    }
  };

  useEffect(() => {
    getBotines();
  }, []);

  return (
    <>
      
        <p className="font-extrabold w-full text-2xl p-10 text-left">
          LANZAMIENTOS
        </p>
      
      <Swiper
        style={swiperStyles}
        slidesPerView={3}
        spaceBetween={30}
        cssMode={true}
        navigation={true}
        pagination={{
          type: "progressbar",
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination]}
        className="mySwiper py-4"
      >
        {botines.map((item) => (
          <SwiperSlide className="">
            <div className="flex flex-row p-20 items-end content-start">
              <div className="px-6">
                <ProductCard
                  title={item.nombre}
                  image={item.imagen}
                  characteristic="Nuevo"
                  price={item.precio}
                  cuota="12"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ProductsCarousel;
