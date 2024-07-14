import { Box } from '@mui/material';
import React from 'react';
import { RiseLoader } from 'react-spinners';

export default function Loader() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999, // Para asegurarse de que esté por encima de otros contenidos
      }}
    >
      <RiseLoader color="#ffffff" /> {/* Puedes ajustar el color del loader si es necesario */}
    </Box>
  );
}
