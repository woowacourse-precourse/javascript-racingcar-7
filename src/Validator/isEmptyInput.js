import { ERROR_MESSAGE } from "../Constants/constant.js";
import errorHandler from "../Error/errorHandler.js";

/**
 *
 * @param {string} input
 * @returns {boolean}
 * @summary 입력값이 비어있는지 확인한다.
 */
const isEmptyInput = (input) => {
  if (input === "") errorHandler(ERROR_MESSAGE.emptyInput);
  return true;
};
export default isEmptyInput;
