import { ProductCard } from "@/components/product-card/ProductCard";
import { getBotines } from "@/redux/features/botinesSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import "./style.css";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

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

export default function FramerMotionCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const dispatch = useAppDispatch();
  const botines = useAppSelector((state) => state.botinesReducer.entities);
  const [botinesState, setBotinesState] = useState<BotinesResponse[]>([]);

  React.useEffect(() => {
    dispatch(getBotines({}));
  }, [dispatch]);

  React.useEffect(() => {
    if (Array.isArray(botines)) {
      setBotinesState(botines);
    }
  }, [botines]);

  const imageIndex = wrap(0, botinesState.length, page);

  return (
    <>
      {botinesState.length > 0 && (
        <AnimatePresence initial={false} custom={direction}>
          <div className="grid grid-flow-col justify-between w-100 items-center">
            <div
              className="next col-span-1"
              onClick={() => paginate(1)}
              style={{ cursor: "pointer" }}
            >
              <KeyboardArrowLeftRoundedIcon fontSize="large"/>
            </div>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <div className="col-span-9">
                <div className="grid grid-cols-9 gap-20">
                  <div className="col-span-3">
                    <ProductCard
                      title={botinesState[imageIndex].nombre}
                      image={botinesState[imageIndex].imagen}
                      characteristic="Nuevo"
                      price={botinesState[imageIndex].precio}
                      cuota="12"
                    />
                  </div>
                  <div className="col-span-3">
                    <ProductCard
                      title={
                        botinesState[
                          wrap(0, botinesState.length, imageIndex + 1)
                        ].nombre
                      }
                      image={
                        botinesState[
                          wrap(0, botinesState.length, imageIndex + 1)
                        ].imagen
                      }
                      characteristic="Nuevo"
                      price={
                        botinesState[
                          wrap(0, botinesState.length, imageIndex + 1)
                        ].precio
                      }
                      cuota="12"
                    />
                  </div>
                  <div className="col-span-3">
                    <ProductCard
                      title={
                        botinesState[
                          wrap(0, botinesState.length, imageIndex + 2)
                        ].nombre
                      }
                      image={
                        botinesState[
                          wrap(0, botinesState.length, imageIndex + 2)
                        ].imagen
                      }
                      characteristic="Nuevo"
                      price={
                        botinesState[
                          wrap(0, botinesState.length, imageIndex + 2)
                        ].precio
                      }
                      cuota="12"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <div
              className="prev col-span-1"
              onClick={() => paginate(-1)}
              style={{ cursor: "pointer" }}
            >
              <KeyboardArrowRightRoundedIcon fontSize="large"/>
            </div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
}
