import { PATTERN } from "../Constants/constant.js";

const parserCarList = (carList) => {
  const carListArr = carList.split(PATTERN.COMMA);
  return carListArr;
};
export default parserCarList;
