"use client";
import { Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CancelPresentationSharpIcon from "@mui/icons-material/CancelPresentationSharp";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface HeaderExpandBannerProps {
  items: {
    title: string;
    body: string;
    button?: string;
  }[];
  open: boolean;
  setClose: () => void;
}

const HeaderExpandBanner: React.FC<HeaderExpandBannerProps> = ({
  items,
  open,
  setClose,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white absolute top-0 w-full">
            <div className="flex d-flex justify-end p-5">
              <IconButton onClick={setClose}>
                <CancelPresentationSharpIcon color="error" />
              </IconButton>
            </div>
            <div className="flex d-flex grid-cols-3 p-10">
              {items.map((item, index) => (
                <div key={index} className="p-10">
                  {/* Renderiza el contenido para cada elemento en items */}
                  <p className="pb-3 font-bold">{item.title}</p>
                  <p className="text-sm pb-3">{item.body}</p>
                  {item.button && (
                    <Button
                      variant="contained"
                      color="warning"
                      style={{ color: "black" }}
                    >
                      <Typography>{item.button}</Typography>
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeaderExpandBanner;
