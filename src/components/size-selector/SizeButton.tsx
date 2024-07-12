"use client";
import {
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3c3c3c", // Color azul para el color primario
      contrastText: "#fff", // Texto blanco para el color primario
    },
  },
});

interface SizeButtonProps {
  size: string;
  selected: boolean;
  onClick: () => void;
}

export const SizeButton: React.FC<SizeButtonProps> = ({
  size,
  selected,
  onClick,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={selected ? "contained" : "outlined"}
        color="primary"
        onClick={onClick}
        style={{
          backgroundColor: selected ? "#3c3c3c" : "",
          color: selected ? "white" : "black",
        }}
      >
        {size}
      </Button>
    </ThemeProvider>
  );
};
