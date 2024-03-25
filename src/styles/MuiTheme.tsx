'use client'
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { grey, orange } from "@mui/material/colors";
import { ReactNode } from "react";

declare module "@mui/material/styles" {
    interface Theme {
      status: {
        danger: string;
        dark: string;
      };
    }
    interface ThemeOptions {
      status?: {
        danger?: string,
        dark?: string;
      };
    }
  }
  
  const MuiTheme = ({children}:{children:ReactNode})=> {
    const theme = createTheme({
        status: {
          danger: orange[500],
          dark: grey[900]
        },
      });
      return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
      )
  }
  
export default MuiTheme;
