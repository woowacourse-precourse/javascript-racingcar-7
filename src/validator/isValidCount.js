import { TYPE_POSITIVE_INTEGER } from '../constant/errorMessage.js';

export const isValidCount = (count) => {
  if (!(0 < count)) {
    throw new Error(`[ERROR]: ${TYPE_POSITIVE_INTEGER}`);
  }
};
