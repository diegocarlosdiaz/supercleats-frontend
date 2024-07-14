"use client";
import SizeSelector from "@/components/size-selector/SizeSelector";
import VerticalSlider from "@/components/vertical-slider-image/VerticalSlider";
import { getBotines } from "@/redux/features/botinesSlice";
import { getTalles } from "@/redux/features/tallesSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useParams, useRouter } from "next/navigation";
import { addDots } from "@/utils/addDots";
import React, { useEffect, useState } from "react";
import AddRemoveButton from "@/components/buttons/AddRemoveButton";
import { Divider } from "@mui/material";
import DinamicButton from "@/components/buttons/DinamicButton";
import AppAccordion from "@/components/accordion/AppAccordion";
import {
  CAMBIOS_DEVOLUCIONES,
  DESCRIPCION_BOTIN,
  ENTREGAS_ENVIOS,
} from "@/constants/texts";
import ProductsCarousel from "@/components/products-carousel/ProductsCarousel";
import FramerMotionCarousel from "@/components/framer-motion/carousel/FramerMotionCarousel";
import {SideCartForm} from "@/components/side-form-cart/SideCartForm";

interface Botin {
  id: string;
  nombre: string;
  precio: string;
  imagen:string;
}
interface Talle {
  argentina: string;
}

export default function Page() {
  const { id } = useParams();
  const talles = useAppSelector(
    (state: { tallesReducer: { entities: Talle[] } }) =>
      state.tallesReducer.entities
  );
  const botines = useAppSelector(
    (state: { botinesReducer: { entities: Botin[] } }) =>
      state.botinesReducer.entities
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTalles({}));
    dispatch(getBotines({ id }));
  }, []);
  const formattedTalles = talles.map((talle) => talle.argentina);
  const botin = Array.isArray(botines)
    ? botines.length > 0
      ? botines[0]
      : null
    : botines;
  const formattedPrice = addDots(botin && botin.precio);

  const accordionData = [
    { title: "Descripcion", description: DESCRIPCION_BOTIN },
    { title: "Entregas", description: ENTREGAS_ENVIOS },
    { title: "Cambios y Devoluciones", description: CAMBIOS_DEVOLUCIONES },
  ];
  
  console.log(botin)
  return (
    <>
      <div className="m-100 p-10 grid grid-cols-12">
        <div className="col-span-9">
          <VerticalSlider />
        </div>

        <div className="col-span-3">
          {botin ? (
            <>
              <SideCartForm
                image={botin.imagen}
                name={botin.nombre}
                id={botin.id}
                price={botin.precio}
                formattedPrice={formattedPrice}
                talles={formattedTalles}
                accordionData={accordionData}
              />
            </>
          ) : (
            <p>No se encontró información del botín</p>
          )}
        </div>
      </div>
      <div>
        <p className="text-center py-20 text-3xl font-bold">
          Recomendado para vos
        </p>
        <div className="pb-10">
          <FramerMotionCarousel />
        </div>
      </div>
    </>
  );
}
