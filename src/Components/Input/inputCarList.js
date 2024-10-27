import { GIDE_MESSAGE } from "../../Constants/constant.js";
import parserCarList from "../../Utils/parserCarList.js";
import printGideMessage from "./module/printGideMessage.js";

const inputCarList = async () => {
  const carList = await printGideMessage(GIDE_MESSAGE.carList);
  const carListArr = parserCarList(carList);
  return carListArr;
};
export default inputCarList;
