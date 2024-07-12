"use client";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import HeaderExpandBanner from "./HeaderExpandBanner";

const data = [
  {
    title: "HASTA 40% OFF",
    body: "¡Es momento de aprovechar! Descuentos increíbles de hasta 40% off en el outlet.",
    button: "APROVECHAR OFERTAS",
  },
  {
    title: " AHORA PODÉS COMPRAR EN HASTA 3 CUOTAS SIN INTERÉS ",
    body: "Pagá en hasta 3 cuotas sin interés en compras superiores a $60.000",
  },
  {
    title: "RECIBÍ TU PEDIDO AL DÍA SIGUIENTE",
    body: "Hacé tu pedido y recibilo al día siguiente hábil por $3.999. Disponible para órdenes entregadas en CABA.",
  },
];

export default function () {
  const [item, setItem] = useState(data[0]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      // Obtén el índice actual de item en el array data
      const currentIndex = data.indexOf(item);
      // Calcula el índice del próximo elemento
      const nextIndex = (currentIndex + 1) % data.length;
      // Actualiza el estado con el próximo elemento
      setItem(data[nextIndex]);
    }, 5000);
    // Limpia el intervalo cuando el componente se desmonta o cuando item cambia
    return () => clearInterval(interval);
  }, [item, data, isOpen]);
  const handleExpandBanner = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <motion.div 
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <HeaderExpandBanner items={data} open={isOpen} setClose={onClose} />
      </motion.div>

      <div className="text-center bg-slate-400">
        <motion.div
          key={item.title}
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p className="text-black font-bold text-xs">
            {item.title}
            <IconButton onClick={handleExpandBanner}>
              <ExpandMoreIcon />
            </IconButton>
          </p>
        </motion.div>
      </div>
    </>
  );
}
