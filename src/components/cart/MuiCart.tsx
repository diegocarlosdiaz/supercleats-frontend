import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Divider, Grid, IconButton, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { ItemCardCart } from "./ItemCardCart";
import { forwardRef, Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCartItems } from "@/redux/features/cartSlice";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

interface MuiCartProps {
  openByButtonCart: boolean;
  handleClose: () => void;
}

export default function MuiCart({ openByButtonCart, handleClose }: MuiCartProps) {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const cleats = useAppSelector((state) => state.cartReducer.items);

  useEffect(() => {
    setOpen(openByButtonCart);
  }, [openByButtonCart]);

  const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

  useEffect(() => {
    dispatch(setCartItems(currentCart))
  }, []);
  
  return (
    <Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          style: {
            width: "400px",
            height: "100%",
            margin: 0,
            position: "fixed",
            right: 0,
            top: 0,
            borderRadius: 0,
            maxHeight: "100%",
          },
        }}
      >
        <DialogTitle>
          <Grid container justifyContent="space-between">
            <Grid item>{"Mi Carrito"}</Grid>
            <Grid item>
              <IconButton onClick={handleClose}>
                <CloseRoundedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <Divider />
        <DialogContent>

          {cleats.map((botin: any) => (
            <ItemCardCart
              key={botin.id}
              cart={cleats}
              image={botin.image}
              title={botin.nombre}
              talle={botin.talle}
              item_nro={botin.id}
              total={botin.totalPrice}
              initialCantidad={botin.cantidad}
            />
          ))}
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
