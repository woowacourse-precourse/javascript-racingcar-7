import Car from "../src/Car.js"
import { isValidNumber } from "../src/validation.js";

describe("자동차 이름 유효성 테스트", () => {
  test.each([
    ["5자 초과", "pobi,pororo"],
    ["공백", "pobi, "],
    ["중복", "pobi,crong,pobi"],
  ])("%s", (_, nameList) => {
    expect(() => Car.makeCarList(nameList)).toThrow("[ERROR]");
  });
});

describe("이동 횟수 유효성 테스트", () => {
  test.each([
    ["0", "0"],
    ["음수", "-3"],
    ["문자", "abc"],
    ["빈 값", ""],
    ["소수", "1.9999999999999999"],
  ])("%s", (_, number) => {
    expect(() => isValidNumber(number)).toThrow("[ERROR]");
  });
});
