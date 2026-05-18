
/**
 * Formatea una fecha en el formato "Month Day, Year".
 * @param {date} date - La fecha a formatear.
 * @returns {string} La fecha formateada en formato "Month Day, Year".
 */
function formatDateToString(date: Date): string {
  const formato = new Intl.DateTimeFormat('es-ES', { month: 'long', day: 'numeric', year: 'numeric' }); 
  return formato.format(date);
}

export default formatDateToString;