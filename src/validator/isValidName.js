import { TYPE_CORRECT_LENGTH } from '../constant/errorMessage.js';

export const isValidName = (name) => {
  if (name.length > 5) {
    throw new Error(`[ERROR]: ${TYPE_CORRECT_LENGTH}`);
  }
};
