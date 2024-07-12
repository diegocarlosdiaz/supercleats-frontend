export const mapToQueryParams = (values) => {
    const params = new URLSearchParams();
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        const value = values[key];
        if (Array.isArray(value)) {
          // Si el valor es un array, unimos los elementos con comas
          params.append(key, value.join(','));
        } else if (value !== false && value !== undefined && value !== null) {
          // Si el valor no es false, undefined o null, lo agregamos
          params.append(key, value);
        }
      }
    }
    return params.toString();
  };