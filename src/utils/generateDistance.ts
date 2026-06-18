
/**
 * Genera la distancia entre una publicación y una etiqueta en función de su índice.
 * @param {number} postIndex El índice de la publicación.
 * @param {number} tagIndex El índice de la etiqueta.
 * @param {boolean} isDesktop Indica si se está utilizando una pantalla de escritorio o no.
 * @return {number} La distancia entre la publicación y la etiqueta.
 */
function generateDistance(postIndex:number, tagIndex:number, isDesktop:boolean) :number {    
    const radius = 50 + (postIndex * 20) + (tagIndex * 10); // Radio diferente por tag
     //Para mobile tiene que ser más chico
    return isDesktop ? radius : radius/2;
}

export default generateDistance;