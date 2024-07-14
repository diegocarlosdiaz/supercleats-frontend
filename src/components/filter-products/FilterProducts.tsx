"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Slider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {} from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useForm } from "react-hook-form";
import { getBotines } from "@/redux/features/botinesSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { mapToQueryParams } from "@/utils/mapToQueryParams";

interface Marca {
  marca: string;
}
interface Talle {
  europa: string;
}

interface FilterProductsProps {
  marcas: Marca[];
  talles: Talle[];
}
enum OrderEnum {
  highPrice = "high-price",
  lowPrice = "low-price",
  release = "release",
  discount = "best-discount",
}

interface Inputs {
  order: OrderEnum;
  precioMinimo: number;
  precioMaximo: number;
  genero: string[];
  marca: string[];
  sizes: string[];
}

export default function FilterProducts({
  marcas,
  talles,
}: FilterProductsProps) {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#000000",
        main: "#000000",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  const { register, watch, setValue, getValues  } = useForm<Inputs>({
    defaultValues: {
      precioMinimo: 0,
      precioMaximo:5000000
    },
  });
  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    const [min, max] = newValue as number[];
    setValue("precioMinimo", min);
    setValue("precioMaximo", max);
  };
  const dispatch = useAppDispatch();
  const botines = useAppSelector((state) => state.botinesReducer.entities);
  // Observando los valores del formulario
  const watchedValues = watch();
  const [queryParams, setQueryParams] = useState('');
  useEffect(() => {
    setQueryParams(mapToQueryParams(watchedValues))
  }, [watchedValues]);
  
  // Función que se ejecutará en cada cambio
  //TODO: CONCATENAR LOS WATCHEDVALUES EN LA QUERY PARAMS Y HACER LA CONSULTA CON QUERY PARAMS
  useEffect(() => {
    dispatch(getBotines({queryParams}))
  }, [queryParams]);
  console.log('Formulario actualizado:', watchedValues);
  return (
    <ThemeProvider theme={theme}>
      <form>
        <div className="sticky top-5">
          <p className="font-bold pb-2">Ordena tu busqueda por:</p>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={''}
            fullWidth
            {...register("order")}
          >
            <MenuItem disabled value={''}>
              <p className="font-semibold">Seleccione un Filtro</p>
            </MenuItem>
            <MenuItem value={OrderEnum.release}>
              <p className="font-semibold">Lanzamiento</p>
            </MenuItem>
            <MenuItem value={OrderEnum.lowPrice}>
              <p className="font-semibold">Menor Precio</p>
            </MenuItem>
            <MenuItem value={OrderEnum.highPrice}>
              <p className="font-semibold">Mayor Precio</p>
            </MenuItem>
            <MenuItem value={OrderEnum.discount}>
              <p className="font-semibold">Mejor Descuento</p>
            </MenuItem>
          </Select>
          <p className="font-bold pt-5 pb-2">Filtra tu busqueda por:</p>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p className="font-bold pb-2 w-48">Precio</p>
            </AccordionSummary>
            <AccordionDetails>
            <Slider
                max={500000}
                value={[getValues("precioMinimo"), getValues("precioMaximo")]}
                onChange={handleChangeSlider}
                valueLabelDisplay="auto"
                sx={{ width: 200 }}
                color="primary"
              />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <p className="font-bold pb-2 w-48">Genero</p>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
              <FormControlLabel
                  control={<Checkbox {...register("genero")} value="femenino" />}
                  label="Mujer"
                />
                <FormControlLabel
                  control={<Checkbox {...register("genero")} value="masculino" />}
                  label="Hombre"
                />
                <FormControlLabel
                  control={<Checkbox {...register("genero")} value="niños" />}
                  label="Niño"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <p className="font-bold pb-2 w-48">Marca</p>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                {marcas.map((item: { marca: string }) => (
                  <FormControlLabel
                  control={
                    <Checkbox {...register("marca")} value={item.marca} />
                  }
                    label={item.marca}
                  />
                ))}
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <p className="font-bold pb-2 w-48">Talle</p>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <div className="grid grid-cols-3">
                  {talles.map((item: { europa: string }) => (
                    <FormControlLabel
                    control={
                      <Checkbox {...register("sizes")} value={item.europa} />
                    }
                      label={item.europa}
                    />
                  ))}
                </div>
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </div>
      </form>
    </ThemeProvider>
  );
}
