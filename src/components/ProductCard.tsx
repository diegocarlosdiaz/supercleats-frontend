"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import SeeProductButton from "./buttons/SeeProductButton";
import FavouriteButton from "./buttons/FavouriteButton";

export default function ProductCard() {
  const [showActions, setShowActions] = React.useState(false);

  const handleHoverStart = () => {
    setShowActions(true);
  };

  const handleHoverEnd = () => {
    setShowActions(false);
  };

  return (
    <motion.div
      style={{ transformOrigin: "top" }}
      whileHover={{ scale: 1.1 }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <Card
        sx={{ maxWidth: 220 }}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <div className="text-end">
          <FavouriteButton />
        </div>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/botin-puma.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <AnimatePresence>
          {showActions && (
            <CardActions className="flex justify-center">
              <SeeProductButton content="VER PRODUCTO" />
            </CardActions>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}
