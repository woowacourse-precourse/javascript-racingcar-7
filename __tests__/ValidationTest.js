import { validateCarNames, validateTryCount } from "../src/util/validation";
import { CAR_ERROR, NUMBER_ERROR } from "../src/util/constants";

describe("자동차 이름 입력 유효성 검사", () => {
  test("정상적인 자동차 이름 입력", () => {
    const input = "pobi,woni,jun";
    const expected = ["pobi", "woni", "jun"];
    expect(validateCarNames(input)).toEqual(expected);
  });

  test("자동차 이름이 공백인 경우", () => {
    const input = "   ";
    expect(() => validateCarNames(input)).toThrow(CAR_ERROR.CAR_BLANK);
  });

  test("자동차 이름에 공백이 포함된 경우 trim 처리", () => {
    const input = "pobi , woni , jun";
    const expected = ["pobi", "woni", "jun"];
    expect(validateCarNames(input)).toEqual(expected);
  });

  test("자동차가 1대인 경우", () => {
    const input = "pobi";
    expect(() => validateCarNames(input)).toThrow(CAR_ERROR.CAR_OVER_2);
  });

  test("자동차 이름이 5자를 초과하는 경우", () => {
    const input = "pobi,woni,junius";
    expect(() => validateCarNames(input)).toThrow(CAR_ERROR.CAR_UNDER_5);
  });

  test("자동차 이름이 중복되는 경우", () => {
    const input = "pobi,woni,pobi";
    expect(() => validateCarNames(input)).toThrow(CAR_ERROR.CAR_DUPLICATE);
  });

  test("자동차 이름 중 하나가 공백인 경우", () => {
    const input = "pobi,,woni";
    expect(() => validateCarNames(input)).toThrow(CAR_ERROR.CAR_BLANK);
  });
});

describe("시도 횟수 입력 유효성 검사", () => {
  test("정상적인 시도 횟수 입력", () => {
    const input = "5";
    expect(validateTryCount(input)).toBe(5);
  });

  test("시도 횟수가 공백인 경우", () => {
    const input = "   ";
    expect(() => validateTryCount(input)).toThrow(NUMBER_ERROR.NUMBER_BLANK);
  });

  test("시도 횟수가 숫자가 아닌 경우", () => {
    const input = "abc";
    expect(() => validateTryCount(input)).toThrow(NUMBER_ERROR.NUMBER_NONNUM);
  });

  test("시도 횟수가 음수인 경우", () => {
    const input = "-1";
    expect(() => validateTryCount(input)).toThrow(NUMBER_ERROR.NUMBER_NONNUM);
  });

  test("시도 횟수가 0인 경우", () => {
    const input = "0";
    expect(() => validateTryCount(input)).toThrow(NUMBER_ERROR.NUMBER_NONNUM);
  });

  test("시도 횟수가 소수인 경우", () => {
    const input = "1.5";
    expect(() => validateTryCount(input)).toThrow(NUMBER_ERROR.NUMBER_NONNUM);
  });

  test("시도 횟수가 공백을 포함한 숫자인 경우", () => {
    const input = " 5 ";
    expect(validateTryCount(input)).toBe(5);
  });
});
