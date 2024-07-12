import { Box, IconButton, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import { useFormContext, UseFormRegisterReturn } from "react-hook-form";

interface AddRemoveButtonProps {
  registerReactHookForm?: UseFormRegisterReturn;
  onChange?: (value: number) => void;
  cantidad: number
}

export default function AddRemoveButton({ registerReactHookForm, onChange, cantidad }: AddRemoveButtonProps) {
  const [localCant, setLocalCant] = useState(cantidad);
  const formContext = useFormContext();

  useEffect(() => {
    if (formContext && registerReactHookForm?.name) {
      formContext.setValue(registerReactHookForm.name, localCant);
    }
    if (onChange) onChange(localCant);
  }, [localCant]);

  const add = () => {
    setLocalCant(prev => prev + 1);
  };

  const remove = () => {
    setLocalCant(prev => prev > 0 ? prev - 1 : 0);
  };

  return (
    <Box
      display="flex"
      width="auto"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        border: "1px solid black",
        borderRadius: "10px",
        padding: "0 2px",
        maxWidth: "100px",
      }}
    >
      <IconButton size="small" sx={{ color: "black" }} onClick={remove}>
        <RemoveCircleRoundedIcon fontSize="medium" />
      </IconButton>
      <Typography>{localCant}</Typography>
      <IconButton size="small" sx={{ color: "black" }} onClick={add}>
        <AddCircleRoundedIcon fontSize="medium" />
      </IconButton>
      {formContext && registerReactHookForm && (
        <input
          type="hidden"
          {...registerReactHookForm}
        />
      )}
    </Box>
  );
}