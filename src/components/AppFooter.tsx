import React from "react";

export default function AppFooter() {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
          <div className="flex flex-col space-y-2">
            <button className="text-left hover:text-gray-300">Terminos y condiciones</button>
            <button className="text-left hover:text-gray-300">Como comprar</button>
            <button className="text-left hover:text-gray-300">Politicas de cambio</button>
          </div>
          <div className="flex flex-col space-y-2">
            <button className="text-left hover:text-gray-300">Preguntas frecuentes</button>
            <button className="text-left hover:text-gray-300">Ver sucursales</button>
            <button className="text-left hover:text-gray-300">Contacto</button>
          </div>
          <div className="flex flex-col space-y-2">
            <button className="text-left hover:text-gray-300">Trabaja con nosotros</button>
            <button className="text-left hover:text-gray-300">Boton de arrepentimiento</button>
            <button className="text-left hover:text-gray-300">0810-888-9234</button>
          </div>
        </div>
        <div className="border-t border-white my-4"></div>
        <p className="text-center py-4 text-xs">© 2024 Super Cleats | Todos los derechos reservados</p>
      </div>
    </footer>
  );
}