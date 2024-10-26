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
});
