import {
  ONE_CAR_MESSAGE,
  WRONG_SEPARATOR_MESSAGE,
} from "../src/constants/errorMessage.js";
import { validateCarNameList, validateTryCount } from "../src/validation.js";

describe("자동차 입력 테스트", () => {
  test("자동차 이름 구분자가 쉼표인 경우", async () => {
    // given
    const inputs = "phobi, woni";

    // when, then
    expect(() => validateCarNameList(inputs)).toBeTruthy();
  });
  test("자동차 이름 구분자가  쉼표가 아닌 경우", async () => {
    // given
    const inputs = "phobi; woni";

    // when, then
    expect(() => validateCarNameList(inputs)).toThrow(WRONG_SEPARATOR_MESSAGE);
  });
  test("자동차 이름이 하나만 입력된 경우", async () => {
    // given
    const inputs = "phobi";

    // when, then
    expect(() => validateCarNameList(inputs)).toThrow(ONE_CAR_MESSAGE);
  });
});

describe("시도 횟수 테스트", () => {
  it.each([[0], [-5], ["n"]])("예외 테스트", (input) => {
    expect(() => validateTryCount(input).toThrow());
  });
});
