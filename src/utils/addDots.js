export const addDots = (input) => {
    // Convertir a cadena si no lo es
    let str = input?.toString();
    
    // Crear un array para los caracteres con puntos
    let result = [];
    
    // Iterar sobre la cadena desde el final
    for (let i = str?.length - 1, counter = 1; i >= 0; i--, counter++) {
      result.unshift(str[i]);
      if (counter % 3 === 0 && i !== 0) {
        result.unshift('.');
      }
    }
    
    // Unir el array en una cadena y devolver
    return result.join('');
  }