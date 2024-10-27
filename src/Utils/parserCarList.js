import { PATTERN } from "../Constants/constant.js";

/**
 *
 * @param {string} carList
 * @returns string[]
 * @summary 입력받은 자동차 리스트를 쉼표로 구분하여 배열로 만든다.
 */
const parserCarList = (carList) => {
  const carListArr = carList.split(PATTERN.COMMA);
  return carListArr;
};
export default parserCarList;
