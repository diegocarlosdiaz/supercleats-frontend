import { Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import AddRemoveButton from "../buttons/AddRemoveButton";
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '@/redux/features/cartSlice';

interface ItemCardCartProps {
  title: string;
  image: string;
  talle: string;
  item_nro: string;
  initialCantidad: number;
  total: string;
  cart: any[];
}

export const ItemCardCart = ({
  title,
  image,
  talle,
  item_nro,
  initialCantidad,
  total,
  cart,
}: ItemCardCartProps) => {
  const dispatch = useDispatch();
  const [localTotalPrice, setLocalTotalPrice] = useState(parseInt(total));
  const [cantidad, setCantidad] = useState(initialCantidad);

  useEffect(() => {
    const unitPrice = parseInt(total) / initialCantidad;
    setLocalTotalPrice(unitPrice * cantidad);
  }, [cantidad, initialCantidad, total]);

  const handleCantidadChange = (newCantidad: number) => {
    setCantidad(newCantidad);
    dispatch(updateQuantity({ id: item_nro, cantidad: newCantidad }));
  };

  const handleRemoveClick = () => {
    dispatch(removeFromCart({id:item_nro, talle}));
  };

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        paddingY={1}
      >
        <Grid item>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item>
          <IconButton
            sx={{ paddingTop: 1 }}
            onClick={() => handleRemoveClick()}
          >
            <DeleteForeverRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper
            variant="outlined"
            sx={{ width: "100%", height: "100%", overflow: "hidden" }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "100%",
              }}
            >
              <Image src={image} alt="botin" layout="fill" objectFit="cover" />
            </div>
          </Paper>
        </Grid>
        <Grid
          container
          direction="column"
          item
          xs={6}
          paddingY={1}
          justifyContent="center"
        >
          <Stack paddingY={2}>
            <Typography variant="caption" paddingBottom={0.5}>
              Talle: {talle}
            </Typography>
            <Typography variant="caption">Item: {item_nro}</Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center" paddingY={0.5}>
            <AddRemoveButton
              cantidad={cantidad}
              onChange={handleCantidadChange}
            />
            <Typography variant="caption">Total: ${localTotalPrice}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
