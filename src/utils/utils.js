import { uuid } from "uuidv4";

/**
 * Generates a random string. 
 * @returns {string} 
 */
export const generateId = () => {
  return uuid().replace("-", "").toUpperCase().toString();
};
