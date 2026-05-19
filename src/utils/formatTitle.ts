
/**
 * Formatea un título en el formato kebab-case.
 * @param {title} title - El título a formatear
 * @returns {string} El título ya formateado en el formato kebab-case
 */
function formatTitleToKebabCase(title: string): string {
    const titleKebabCase = title.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');
    return titleKebabCase;
}

export default formatTitleToKebabCase;