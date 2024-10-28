import { convertNumber } from "../src/features/convertNumber.js";
import { MESSAGES } from "../src/config/config.js";

describe("convertNumber 테스트", () => {
  test("정상적으로 문자열을 숫자로 변환하는 지 확인", () => {
    const INPUT = "5";
    const EXPECTED = 5;
    expect(convertNumber(INPUT)).toEqual(EXPECTED);
  });

  test("숫자(문자열)이 아닐 때 에러를 발생시키는 지 확인", () => {
    const INPUT = "string";
    expect(() => convertNumber(INPUT)).toThrowError(MESSAGES.ERROR_INVALID_NUMBER);
  });
});
