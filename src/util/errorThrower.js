//@ts-check

import { ERROR_PREFIX } from '../constants/messages.js';

/**@param {string} message */
const throwError = (message) => {
  throw new Error(`${ERROR_PREFIX} ${message}`);
};

export default throwError;
