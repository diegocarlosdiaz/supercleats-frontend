'use client'
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FavouriteButton = () => {
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed(!isRed);
  };

  return (
    <IconButton onClick={handleClick} color={isRed ? "error" : "default"}>
      <FavoriteIcon />
    </IconButton>
  );
};

export default FavouriteButton;
