import ERROR_MESSAGE from "../src/constants/errorMessage.js";
import { validateCarNameList, validateTryCount } from "../src/validation.js";

describe("자동차 입력 테스트", () => {
  test("자동차 이름 구분자가 쉼표인 경우", async () => {
    // given
    const inputs = "phobi, woni";

    // when, then
    expect(() => validateCarNameList(inputs)).toBeTruthy();
  });

  it.each([
    ["phobi; woni", ERROR_MESSAGE.WRONG_SEPARATOR],
    ["phobi", ERROR_MESSAGE.ONE_CAR],
    ["phobi,phobi", ERROR_MESSAGE.DUPLICATE_NAME],
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
    [0, ERROR_MESSAGE.ZERO_NUMBER],
    [-5, ERROR_MESSAGE.MINUS_NUMBER],
    ["n", ERROR_MESSAGE.NOT_NUMBER],
  ])("시도 횟수가 양수가 아닌 경우 예외 테스트", (input, message) => {
    expect(() => validateTryCount(input).toThrow(message));
  });
});
