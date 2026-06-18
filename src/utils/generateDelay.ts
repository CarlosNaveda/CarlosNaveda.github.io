/**
 * Genera el retraso en segundos para una etiqueta y un post determinados.
 * @param {number} postIndex El índice del post en la lista de posts.
 * @param {number} tagIndex El índice de la etiqueta en la lista de etiquetas.
 * @returns {string} El retraso en segundos como una cadena.
 */
function generateDelay(postIndex: number, tagIndex: number) : string {
   const delay = (postIndex * 1.5) + (tagIndex * 0.5);
    return `${delay}s`;
}    


export default generateDelay;