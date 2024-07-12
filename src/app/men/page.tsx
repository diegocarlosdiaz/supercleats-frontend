"use client";

import FilterProducts from "@/components/filter-products/FilterProducts";
import React, { useEffect } from "react";
import "@mantine/core/styles.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getMarcas } from "@/redux/features/marcasSlice";
import { getTalles } from "@/redux/features/tallesSlice";
import { getBotines } from "@/redux/features/botinesSlice";
import { Grid } from "@mui/material";
import { ProductCard } from "@/components/product-card/ProductCard";
import { useWindowScroll } from "@mantine/hooks";
import VerticalSlider from "@/components/vertical-slider-image/VerticalSlider";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import ProductsCarousel from "@/components/products-carousel/ProductsCarousel";

interface BotinesResponse {
  id:string;
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

export default function page() {
  const marcas = useAppSelector((state) => state.marcasReducer.entities);
  const talles = useAppSelector((state) => state.tallesReducer.entities);
  const botines = useAppSelector((state) => state.botinesReducer.entities);
  const { push } = useRouter();
  const handleClick = (id:string) => {
    push(`/men/${id}`)
  }

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMarcas({}));
    dispatch(getTalles({}));
    dispatch(getBotines({}));
  }, []);
  console.log(talles);

  return (
    <div className="grid grid-flow-col m-8">
      <div ><FilterProducts talles={talles} marcas={marcas} /></div>
      
      <div className="grid grid-cols-3">
        {" "}
        {/* Utiliza flex-grow para que las columnas ocupen todo el espacio disponible */}
        {botines.map((item: BotinesResponse) => (
          <div className="">
            <div onClick={() => handleClick(item.id)} className="px-6">
              <ProductCard
                title={item.nombre}
                image={item.imagen}
                characteristic="Nuevo"
                price={item.precio}
                cuota="12"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
