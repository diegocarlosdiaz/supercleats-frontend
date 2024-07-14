"use client";
import { ProductCard } from "@/components/product-card/ProductCard";
import BrandBanner from "@/components/brands-banner/BrandBanner";
import FirstBanner from "@/components/home/FirstBanner";

import Image from "next/image";
import "@mantine/core/styles.css";

import type { AppProps } from "next/app";
import { createTheme, MantineProvider } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsCarousel from "@/components/products-carousel/ProductsCarousel";
import DinamicButton from "@/components/buttons/DinamicButton";
import { Grid, Stack, Typography } from "@mui/material";
import SuscribeForm from "@/components/SuscribeForm";
import Imagescarousel from "@/components/images-carousel/Imagescarousel";
import GenderSection from "@/components/gender-section/GenderSection";



export default function Home({ Component, pageProps }: AppProps) {
  return (
    
      <main className="flex min-h-screen flex-col items-center justify-between">
        <>
          <FirstBanner />
          <BrandBanner />
          <GenderSection/>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{
              width: "100%",
              backgroundColor: "yellow",
              height: "190px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p className="text-3xl font-extrabold">
                PUEDES REGISTRARTE CON UN SOLO CLICK
              </p>
              <DinamicButton type="submit" text='REGISTRATE'/>
            </div>
          </Stack>
          <ProductsCarousel/>
          <SuscribeForm/>
        </>
      </main>
    
  );
}
