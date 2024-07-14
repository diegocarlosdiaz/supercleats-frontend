"use client";

import FilterProducts from "@/components/filter-products/FilterProducts";
import React, { useEffect, useState } from "react";
import "@mantine/core/styles.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getMarcas } from "@/redux/features/marcasSlice";
import { getTalles } from "@/redux/features/tallesSlice";
import { getBotines } from "@/redux/features/botinesSlice";
import { ProductCard } from "@/components/product-card/ProductCard";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";

interface BotinesResponse {
  id: string;
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

export default function Page() {
  const marcas = useAppSelector((state) => state.marcasReducer.entities);
  const talles = useAppSelector((state) => state.tallesReducer.entities);
  const botines = useAppSelector((state) => state.botinesReducer.entities);
  const botinesStatus = useAppSelector((state) => state.botinesReducer.isLoading);
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        await Promise.all([
          dispatch(getMarcas({})),
          dispatch(getTalles({})),
          dispatch(getBotines({}))
        ]);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      } finally {
        setIsInitialLoading(false);
      }
    };

    fetchInitialData();
  }, [dispatch]);

  const handleClick = (id: string) => {
    push(`/men/${id}`);
  };

  if (isInitialLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-flow-col m-8">
      <div>
        <FilterProducts talles={talles} marcas={marcas} />
      </div>

      <div className="grid grid-cols-3">
        {botinesStatus ? (
          <Loader />
        ) : botines.length === 0 ? (
          <div>No se encontraron botines con los filtros aplicados.</div>
        ) : (
          botines.map((item: BotinesResponse) => (
            <div key={item.id} className="">
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
          ))
        )}
      </div>
    </div>
  );
}