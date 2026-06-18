/**
 * Función que devuelve un array con elementos únicos de otro array.
 *
 * @param {string[]} array - El array de entrada.
 * @returns {string[]} Un nuevo array con los elementos únicos del original.
 */
function getUniqueArray(array: string[]): string[] {
  const uniqueArray: string[] = [];
  array.forEach((element) => {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  });
  return uniqueArray;
}



export default getUniqueArray;