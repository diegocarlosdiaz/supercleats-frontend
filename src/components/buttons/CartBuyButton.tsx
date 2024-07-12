import { Badge, IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MuiCart from "../cart/MuiCart";
import { clearTraceEvents } from "next/dist/trace/trace";
import { useAppSelector } from "@/redux/hooks";

export default function CartBuyButton() {
  const [open, setOpen] = useState(false);
  const cleats = useAppSelector((state) => state.cartReducer.items);
  const [cantidad, setCantidad] = useState(0);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setCantidad(cleats.length)
  }, [cleats]);

  console.log(cleats)

  return (
    <>
      <Tooltip title="Shopping Cart">
        <IconButton onClick={handleClickOpen} sx={{ p: 0 }}>
          <Badge badgeContent={cantidad} color="error">
            <ShoppingCartOutlinedIcon
              sx={{ color: "white" }}
              fontSize="medium"
            />
          </Badge>
        </IconButton>
      </Tooltip>
      <MuiCart openByButtonCart={open} handleClose={handleClose} />
    </>
  );
}
