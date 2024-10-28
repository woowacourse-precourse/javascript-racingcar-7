import InputValidator from "../src/utils/InputValidator.js";
import { ERROR_MESSAGES } from "../src/utils/constants.js";

describe("InputValidator 테스트", () => {
  describe("자동차 이름 유효성 검사", () => {
    test("빈 값을 입력한 경우 오류 발생", () => {
      expect(() => InputValidator.validateCarNames(",")).toThrow(
        ERROR_MESSAGES.EMPTY_NAME
      );
    });

    test("5자를 초과하는 이름 입력 시 오류 발생", () => {
      expect(() => InputValidator.validateCarNames("abcdef")).toThrow(
        ERROR_MESSAGES.NAME_TOO_LONG
      );
    });

    test("중복된 이름 입력 시 오류 발생", () => {
      expect(() => InputValidator.validateCarNames("pobi,pobi")).toThrow(
        ERROR_MESSAGES.DUPLICATE_NAME
      );
    });
  });

  describe("시도 횟수 유효성 검사", () => {
    test("시도 횟수가 1 미만일 경우 오류 발생", () => {
      expect(() => InputValidator.validateAttempts("0")).toThrow(
        ERROR_MESSAGES.INVALID_ATTEMPTS
      );
    });

    test("숫자가 아닌 경우 오류 발생", () => {
      expect(() => InputValidator.validateAttempts("abc")).toThrow(
        ERROR_MESSAGES.NOT_A_NUMBER
      );
    });

    test("정상적인 시도 횟수 입력 시 통과", () => {
      expect(InputValidator.validateAttempts("5")).toBe(5);
    });
  });
});
