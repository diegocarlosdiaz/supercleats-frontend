import React, { useEffect } from "react";
import SizeSelector from "../size-selector/SizeSelector";
import { Divider } from "@mui/material";
import AddRemoveButton from "../buttons/AddRemoveButton";
import DinamicButton from "../buttons/DinamicButton";
import AppAccordion from "../accordion/AppAccordion";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { addDots } from "@/utils/addDots";
import { useAppDispatch } from "@/redux/hooks";
import { setCartItems } from "@/redux/features/cartSlice";

interface SideCartFormProps {
  name: string;
  image: string;
  id: string;
  price: string;
  formattedPrice: string;
  talles: string[];
  accordionData: any[];
}

export const SideCartForm: React.FC<SideCartFormProps> = ({
  name,
  image,
  id,
  price,
  talles,
  formattedPrice,
  accordionData,
}) => {
  type Inputs = {
    name: string;
    id: string;
    totalPrice: string;
    talle: string;
    cantidad: number;
    image: string;
  };

  const methods = useForm<Inputs>({
    defaultValues: {
      image: image,
      name: name,
      id: id,
      totalPrice: price,
      talle: "",
      cantidad: 1,
    },
  });

  const { setValue, watch } = methods;
  const cantidad = watch("cantidad");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const numericPrice = parseFloat(price);
    const numericCantidad = cantidad || 1;
    const totalPrice = (numericPrice * numericCantidad).toString();
    setValue("totalPrice", totalPrice);
  }, [price, cantidad, setValue]);
  useEffect(() => {
    setValue("name", name);
    setValue("id", id);
    setValue("image", image);
    setValue("totalPrice", price);
  }, [name, id, image, price, setValue]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Obtener el carrito actual del localStorage
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Buscar si el producto ya existe en el carrito
    const existingProductIndex = currentCart.findIndex(
      (item: Inputs) => item.id === data.id && item.talle === data.talle
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya existe, actualizar la cantidad y el precio total
      const existingProduct = currentCart[existingProductIndex];
      const newQuantity = existingProduct.cantidad + data.cantidad;
      const newTotalPrice =
        (parseFloat(data.totalPrice) / data.cantidad) * newQuantity;

      currentCart[existingProductIndex] = {
        ...existingProduct,
        cantidad: newQuantity.toString(),
        totalPrice: newTotalPrice.toFixed(2),
      };
    } else {
      // Si el producto no existe, añadirlo al carrito
      currentCart.push(data);
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("cart", JSON.stringify(currentCart));

    dispatch(setCartItems(currentCart));
  };
  const totalPrice = watch("totalPrice");
  const formattedTotalPrice = addDots(totalPrice);
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <p className="text-2xl">{name}</p>
          <input type="hidden" {...methods.register("name")} value={name} />
          <p className="pb-2">Item No. {id}</p>
          <input type="hidden" {...methods.register("id")} value={id} />
          <input type="hidden" {...methods.register("image")} value={image} />
          <p className="text-xl font-bold pb-2">${formattedPrice}</p>
          <input type="hidden" {...methods.register("totalPrice")} />
          <p className="text-xl pb-2">Conoce nuestras promociones</p>
          <Divider />
          <p className="font-semibold pt-8 pb-1">
            Seleccionar talle argentino:
          </p>
          <SizeSelector
            sizes={talles}
            registerReactHookForm={methods.register("talle")}
          />
          <div className="flex items-center space-x-2 py-5 font-semibold">
            <p>Selecciona una cantidad: </p>
            <AddRemoveButton
              cantidad={cantidad}
              registerReactHookForm={methods.register("cantidad")}
            />
          </div>
          <p className="text-xl font-bold pb-2">
            Total: ${formattedTotalPrice}
          </p>
          <Divider />
          <div className="grid grid-cols-12 my-5 space-between">
            <div className="col-span-6">
              <DinamicButton type="submit" text="Agregar al carrito" />
            </div>
            <div className="col-span-6">
              <DinamicButton type="submit" text="Comprar ahora" />
            </div>
          </div>
          <Divider />
          <div className="py-10">
            <AppAccordion data={accordionData} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
