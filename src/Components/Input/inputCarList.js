import { GIDE_MESSAGE } from "../../Constants/constant.js";
import parserCarList from "../../Utils/parserCarList.js";
import printGideMessage from "./module/printGideMessage.js";

/**
 *
 * @summary 경주할 자동차 리스트를 입력받는다.
 */
const inputCarList = async () => {
  const carList = await printGideMessage(GIDE_MESSAGE.carList);
  const carListArr = parserCarList(carList);
  return carListArr;
};
export default inputCarList;
