import { parseStrings } from "../src/features/parseStrings.js";
import { MESSAGES } from "../src/config/config.js";

describe("parseStrings 테스트", () => {
  test("정상적으로 문자열을 파싱하는 지 확인", () => {
    const INPUT = "pobi,woni,jun";
    const EXPECTED = ["pobi", "woni", "jun"];
    expect(parseStrings(INPUT)).toEqual(EXPECTED);
  });

  test("입력값이 공백일 때 에러를 발생시키는 지 확인", () => {
    const INPUT = "";
    expect(() => parseStrings(INPUT)).toThrowError(MESSAGES.ERROR_INPUT_EMPTY);
  });
});
