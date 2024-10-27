import { GIDE_MESSAGE } from "../../Constants/constant.js";
import parserCarList from "../../Utils/parserCarList.js";
import PrintGideMessage from "../Output/PrintGideMessage.js";

const inputCarList = async () => {
  const carList = await PrintGideMessage(GIDE_MESSAGE.carList);
  const carListArr = parserCarList(carList);
  return carListArr;
};
export default inputCarList;
