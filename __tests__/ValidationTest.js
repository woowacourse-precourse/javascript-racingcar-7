import Car from "../src/Car.js"
import { isValidNumber } from "../src/validation.js";
import { ERROR_MESSAGE } from "../src/constants.js";

describe("자동차 이름 유효성 테스트", () => {
  test.each([
    ["중복", "pobi,crong,pobi", ERROR_MESSAGE.NAME_IS_REPEATED],
    ["공백", "pobi, ", ERROR_MESSAGE.NAME_IS_BLANK],
    ["5자 초과", "pobi,pororo", ERROR_MESSAGE.NAME_IS_OVER_5],
  ])("%s", (_, nameList, errorMessage) => {
    expect(() => Car.makeCarList(nameList)).toThrow(errorMessage);
  });
});

describe("이동 횟수 유효성 테스트", () => {
  test.each([
    ["0", "0", ERROR_MESSAGE.NUMBER_IS_UNDER_1],
    ["음수", "-3", ERROR_MESSAGE.NUMBER_IS_UNDER_1],
    ["문자", "abc", ERROR_MESSAGE.NUMBER_IS_NOT_ENTERED],
    ["빈 값", "", ERROR_MESSAGE.NUMBER_IS_NOT_ENTERED],
    ["소수", "1.9999999999999999", ERROR_MESSAGE.NUMBER_IS_DECIMAL],
  ])("%s", (_, tryTime, errorMessage) => {
    expect(() => isValidNumber(tryTime)).toThrow(errorMessage);
  });
});
