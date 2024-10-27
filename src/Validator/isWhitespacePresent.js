import { ERROR_MESSAGE } from "../Constants/constant.js";
import errorHandler from "../Error/errorHandler.js";

/**
 *
 * @param {string} str
 * @returns {boolean}
 * @summary 문자열에 공백이 있는지 확인한다.
 */
const isWhitespacePresent = (str) => {
  if (/\s/.test(str)) errorHandler(ERROR_MESSAGE.whitesapceInput);
  return true;
};
export default isWhitespacePresent;
