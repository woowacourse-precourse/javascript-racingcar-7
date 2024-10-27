import { GIDE_MESSAGE } from "../../Constants/constant.js";
import parserCarList from "../../Utils/parserCarList.js";
import InputValidator from "../../Validator/InputValidator.js";
import printGideMessage from "./module/printGideMessage.js";

/**
 *
 * @summary 경주할 자동차 리스트를 입력받는다.
 */
const inputCarList = async () => {
  const carList = await printGideMessage(GIDE_MESSAGE.carList);
  InputValidator.validateInputCarList(carList);

  const carListArr = parserCarList(carList);
  InputValidator.validateCarArray(carListArr);
  return carListArr;
};
export default inputCarList;
