import { GIDE_MESSAGE } from "../../Constants/constant.js";
import printGideMessage from "./module/printGideMessage.js";

const inputTryNum = async () => {
  const tryNum = printGideMessage(GIDE_MESSAGE.tryNum);
  return tryNum;
};
export default inputTryNum;
