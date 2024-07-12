"use client";
import React, { useEffect } from "react";
import { SizeButton } from "./SizeButton";
import { UseFormRegisterReturn, useFormContext } from "react-hook-form";

export default function SizeSelector({
  sizes,
  registerReactHookForm,
}: {
  sizes: string[];
  registerReactHookForm: UseFormRegisterReturn;
}) {
  const { watch, setValue } = useFormContext();
  const selectedSize = watch(registerReactHookForm.name);

  const handleSizeClick = (size: string) => {
    setValue(registerReactHookForm.name, size);
  };

  useEffect(() => {
    console.log("Selected size:", selectedSize);
  }, [selectedSize]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sizes.map((size) => (
          <div key={size}>
            <SizeButton
              size={size}
              selected={selectedSize === size}
              onClick={() => handleSizeClick(size)}
            />
          </div>
        ))}
      </div>
      <input type="hidden" {...registerReactHookForm} />
    </>
  );
}