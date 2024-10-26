import InputValidator from "../src/InputValidator";

describe("InputValidator", () => {
  let inputValidator;

  beforeEach(() => {
    inputValidator = new InputValidator();
  });

  describe("validateCarNames", () => {
    test("정상적인 자동차 이름 입력을 통과한다", () => {
      const carNames = ["pobi", "woni", "jun"];
      expect(() => inputValidator.validateCarNames(carNames)).not.toThrow();
    });

    test("빈 문자열 또는 공백이 있는 자동차 이름이 포함된 경우 에러를 발생시킨다", () => {
      const carNames = ["pobi", " ", "jun"];
      expect(() => inputValidator.validateCarNames(carNames)).toThrow(
        "[ERROR] 자동차 이름에 빈 값을 입력할 수 없습니다."
      );
    });

    test("자동차 이름이 5자를 초과하는 경우 에러를 발생시킨다", () => {
      const carNames = ["pobi", "woniii", "jun"];
      expect(() => inputValidator.validateCarNames(carNames)).toThrow(
        "[ERROR] 자동차 이름은 5자 이하만 가능합니다."
      );
    });
  });

  describe("validateMoveCount", () => {
    test("이동 횟수가 올바른 숫자인 경우 통과한다", () => {
      expect(() => inputValidator.validateMoveCount("3")).not.toThrow();
      expect(() => inputValidator.validateMoveCount("10")).not.toThrow();
    });

    test("이동 횟수가 유효하지 않은 경우 에러를 발생시킨다", () => {
      expect(() => inputValidator.validateMoveCount("0")).toThrow(
        "[ERROR] 이동 횟수는 1 이상의 숫자여야 합니다."
      );
      expect(() => inputValidator.validateMoveCount("-1")).toThrow(
        "[ERROR] 이동 횟수는 1 이상의 숫자여야 합니다."
      );
      expect(() => inputValidator.validateMoveCount("a")).toThrow(
        "[ERROR] 이동 횟수는 1 이상의 숫자여야 합니다."
      );
    });
  });
});
