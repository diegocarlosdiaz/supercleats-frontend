import { Grid, TextField, Typography } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import React from "react";
import SuscribeButton from "./buttons/SuscribeButton";

const BlackTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
});

export default function SuscribeForm() {
  
  return (
    <Grid
      container
      sx={{ backgroundColor: "salmon" }}
      direction="column"
      justifyContent="center"
      alignItems="center"
      p={5}
    >
      <p className="text-3xl font-extrabold py-2">
        {" "}
        ¡SUSCRIBITE Y ENTERATE DE TODOS LOS LANZAMIENTOS!{" "}
      </p>
      <p className="text-2xl font-medium">
        {" "}
        Además recibí novedades y promociones exclusivas en tu mail.{" "}
      </p>

      <Grid pb={3}>
        <BlackTextField
          
          sx={{ paddingRight: 2 }}
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        <BlackTextField
          sx={{ paddingLeft: 2 }}
          id="standard-basic"
          label="Telefono"
          variant="standard"
        />
      </Grid>
      <SuscribeButton text='Suscribirme'></SuscribeButton>
    </Grid>
  );
}