import ERROR_MESSAGES from '../constants/errorMessages.js';

export default function throwError(message) {
  const errorMessage = `${ERROR_MESSAGES.PREFIX} ${message}`;
  throw new Error(errorMessage);
}
