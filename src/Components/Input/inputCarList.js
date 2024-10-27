import { GIDE_MESSAGE } from "../../Constants/constant.js";
import PrintGideMessage from "../Output/PrintGideMessage.js";

const inputCarList = async () => {
  const carList = PrintGideMessage(GIDE_MESSAGE.carList);
  return carList;
};
export default inputCarList;
