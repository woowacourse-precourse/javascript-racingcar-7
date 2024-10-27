import { GIDE_MESSAGE } from "../../Constants/constant.js";
import InputValidator from "../../Validator/InputValidator.js";
import printGideMessage from "./module/printGideMessage.js";

/**
 *
 * @summary 시도할 횟수를 입력받는다.
 */
const inputTryNum = async () => {
  const tryNum = Number(await printGideMessage(GIDE_MESSAGE.tryNum));
  InputValidator.validateTryNumber(tryNum);
  return tryNum;
};
export default inputTryNum;
