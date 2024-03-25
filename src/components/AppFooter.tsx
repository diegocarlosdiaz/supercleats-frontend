import React from "react";

export default function AppFooter() {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-3 py-3">
        <div className="flex flex-col ">
          <button>Terminos y condiciones</button>
          <button>Como comprar</button>
          <button>Politicas de cambio</button>
        </div>
        <div className="flex flex-col">
          <button>Preguntas frecuentes</button>
          <button>Ver sucursales</button>
          <button>Contacto</button>
        </div>
        <div className="flex flex-col">
          <button>Trabaja con nosotros</button>
          <button>Boton de arrepentimiento</button>
          <button>0810-888-9234</button>
        </div>
      </div>
      <div className="border border-white"></div>
      <p className="text-center py-3 text-xs">© 2024 Super Cleats | Todos los derechos reservados</p>
    </div>
  );
}
