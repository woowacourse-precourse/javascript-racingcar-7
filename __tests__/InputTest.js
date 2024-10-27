import {
  DUPLICATE_NAME_MESSAGE,
  MINUS_NUMBER_MESSAGE,
  NOT_NUMBER_MESSAGE,
  ONE_CAR_MESSAGE,
  WRONG_SEPARATOR_MESSAGE,
  ZERO_NUMBER_MESSAGE,
} from "../src/constants/errorMessage.js";
import { validateCarNameList, validateTryCount } from "../src/validation.js";

describe("자동차 입력 테스트", () => {
  test("자동차 이름 구분자가 쉼표인 경우", async () => {
    // given
    const inputs = "phobi, woni";

    // when, then
    expect(() => validateCarNameList(inputs)).toBeTruthy();
  });

  it.each([
    ["phobi; woni", WRONG_SEPARATOR_MESSAGE],
    ["phobi", ONE_CAR_MESSAGE],
    ["phobi,phobi", DUPLICATE_NAME_MESSAGE],
  ])("자동차 이름 예외 테스트", (input, message) => {
    expect(() => validateCarNameList(input)).toThrow(message);
  });
});

describe("시도 횟수 테스트", () => {
  test("시도 횟수가 양수인 경우", async () => {
    // given
    const input = 5;

    // when, then
    expect(() => validateTryCount(input)).toBeTruthy();
  });

  it.each([
    [0, ZERO_NUMBER_MESSAGE],
    [-5, MINUS_NUMBER_MESSAGE],
    ["n", NOT_NUMBER_MESSAGE],
  ])("시도 횟수가 양수가 아닌 경우 예외 테스트", (input, message) => {
    expect(() => validateTryCount(input).toThrow(message));
  });
});
