import { GIDE_MESSAGE } from "../../Constants/constant.js";
import PrintGideMessage from "../Output/PrintGideMessage.js";

const inputTryNum = async () => {
  const tryNum = PrintGideMessage(GIDE_MESSAGE.tryNum);
  return tryNum;
};
export default inputTryNum;
