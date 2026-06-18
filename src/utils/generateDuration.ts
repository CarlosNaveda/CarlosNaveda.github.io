/**
 * Genera una cadena de tiempo basada en el índice del post y el índice de la etiqueta.
 * @param {number} postIndex El índice del post.
 * @param {number} tagIndex El índice de la etiqueta.
 * @returns {string} La cadena de tiempo en formato ISO 8601.
 */
function generateDuration(postIndex: number, tagIndex: number): string {
  const duration = 8 + (postIndex * 2) + (tagIndex * 3); // Duración diferente
  return `${duration}s`;  
}


export default generateDuration;