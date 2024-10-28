import { ERROR_MESSAGE } from "../src/constants.js";
import Validator from "../src/Validator.js";

// Validator 클래스의 단위 테스트
describe("Validator 클래스 단위 테스트", () => {
  // validateTryCountInput 테스트
  describe("validateTryCountInput", () => {
    test("빈 문자열이 입력되는 경우 에러", () => {
      expect(() => Validator.validateTryCountInput("")).toThrow(
        ERROR_MESSAGE.EMPTY_TRYCOUNT
      );
    });

    test("0 이하의 숫자가 입력되는 경우 에러", () => {
      expect(() => Validator.validateTryCountInput("0")).toThrow(
        ERROR_MESSAGE.INVALID_TRYCOUNT
      );
      expect(() => Validator.validateTryCountInput("-1")).toThrow(
        ERROR_MESSAGE.INVALID_TRYCOUNT
      );
    });

    test("숫자가 아닌 값이 값이 입력되는 경우 에러", () => {
      expect(() => Validator.validateTryCountInput("abc")).toThrow(
        ERROR_MESSAGE.NOT_NUMBER_TRYCOUNT
      );
      expect(() => Validator.validateTryCountInput("5abc")).toThrow(
        ERROR_MESSAGE.NOT_NUMBER_TRYCOUNT
      );
    });

    test("유효한 시도 횟수가 입력되면 에러가 발생하지 않는다.", () => {
      expect(() => Validator.validateTryCountInput("3")).not.toThrow();
    });
  });

  // validateNameInput 테스트
  describe("validateNameInput", () => {
    test("빈 문자열이 입력되는 경우 에러", () => {
      expect(() => Validator.validateNameInput("")).toThrow(
        ERROR_MESSAGE.EMPTY_NAME
      );
    });

    test("쉼표로 구분된 이름 중 빈 이름이 포함되면 에러", () => {
      expect(() => Validator.validateNameInput("Car1,Car2,")).toThrow(
        ERROR_MESSAGE.EMPTY_NAME
      );
      expect(() => Validator.validateNameInput("Car1,,Car3")).toThrow(
        ERROR_MESSAGE.EMPTY_NAME
      );
    });

    test("이름에 중복이 있는 경우 에러", () => {
      expect(() => Validator.validateNameInput("Car1,Car2,Car1")).toThrow(
        ERROR_MESSAGE.DUPLICATE_NAME
      );
    });

    test("이름이 5자를 초과하면 에러", () => {
      expect(() => Validator.validateNameInput("CarOne,Car2")).toThrow(
        ERROR_MESSAGE.OVER_LENGTH_NAME
      );
      expect(() => Validator.validateNameInput("Car123,Car456")).toThrow(
        ERROR_MESSAGE.OVER_LENGTH_NAME
      );
    });

    test("이름에 공백이 포함된 경우 에러", () => {
      expect(() => Validator.validateNameInput("Car 1,Car2")).toThrow(
        ERROR_MESSAGE.SPACE_NAME
      );
      expect(() => Validator.validateNameInput("Car1, Car2")).toThrow(
        ERROR_MESSAGE.SPACE_NAME
      );
    });

    test("이름에 영문자가 아닌 문자가 포함되면 에러", () => {
      expect(() => Validator.validateNameInput("Car1,Car$")).toThrow(
        ERROR_MESSAGE.INVALID_CHAR_NAME
      );
      expect(() => Validator.validateNameInput("123,Car")).toThrow(
        ERROR_MESSAGE.INVALID_CHAR_NAME
      );
    });

    test("유효한 이름이 입력되면 에러가 발생하지 않는다.", () => {
      expect(() => Validator.validateNameInput("poby,hoby")).not.toThrow();
      expect(() => Validator.validateNameInput("Alpha,Beta")).not.toThrow();
    });
  });
});
