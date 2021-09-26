/**
 * Convert a normal string to kebab-case
 */
export const toKebabCase = (str: string) => str?.toLowerCase().replace(/[' ']+/g, '-');

/**
 * Function to convert a string in kebab case to a sentence case string
 * @param {string} str - string to convert
 * @return {string} the string with the first letter capitalized and spaces
 */
export const kebabToNormalString = (str: string) => {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized.replace(/-/g, ' ');
};
