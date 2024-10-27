import { GIDE_MESSAGE } from "../../Constants/constant.js";
import printGideMessage from "./module/printGideMessage.js";

/**
 *
 * @summary 시도할 횟수를 입력받는다.
 */
const inputTryNum = async () => {
  const tryNum = await printGideMessage(GIDE_MESSAGE.tryNum);
  return tryNum;
};
export default inputTryNum;
