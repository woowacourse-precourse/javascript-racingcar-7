import { validateCarNames, validateRoundNumber } from "./inputValidator";
import { ERROR_MESSAGE } from "../constants/errorMessage";

describe("validateCarNames 테스트", () => {
  test("유효한 자동차 이름 목록 입력시 이름 목록을 배열로 반환한다.", () => {
    const carNames = "car1, car2, car3";
    expect(validateCarNames(carNames)).toEqual(["car1", "car2", "car3"]);
  });

  test("빈 입력 시 오류를 발생시킨다.", () => {
    expect(() => validateCarNames("")).toThrow(ERROR_MESSAGE.EMPTY_INPUT);
  });

  test("항목이 하나뿐인 경우 오류를 발생시킨다.", () => {
    expect(() => validateCarNames("car1")).toThrow(
      ERROR_MESSAGE.SINGLE_CAR_NAME
    );
  });

  test("자동차 이름이 지정된 최대 길이를 초과할 때 오류를 발생시킨다.", () => {
    const invalidCarNames = "car123456, car2";
    expect(() => validateCarNames(invalidCarNames)).toThrow(
      ERROR_MESSAGE.MAX_LENGTH_EXCEEDED
    );
  });

  test("중복된 이름이 있을 때 오류 발생시킨다.", () => {
    const duplicateNames = "car1, car2, car1";
    expect(() => validateCarNames(duplicateNames)).toThrow(
      ERROR_MESSAGE.DUPLICATE_NAME
    );
  });
});

describe("validateRoundNumber 테스트", () => {
  test("유효한 totalRound 입력 시 입력한 값을 정수로 변환하여 반환한다.", () => {
    expect(validateRoundNumber("5")).toBe(5);
  });

  test("빈 입력 시 오류를 발생시킨다.", () => {
    expect(() => validateRoundNumber("")).toThrow(ERROR_MESSAGE.EMPTY_INPUT);
  });

  test("0 이하의 숫자를 입력할 경우 오류를 발생시킨다.", () => {
    expect(() => validateRoundNumber("0")).toThrow(
      ERROR_MESSAGE.INVALID_NUMBER
    );
    expect(() => validateRoundNumber("-3")).toThrow(
      ERROR_MESSAGE.INVALID_NUMBER
    );
  });

  test("소수 입력 시 오류를 발생시킨다.", () => {
    expect(() => validateRoundNumber("3.5")).toThrow(
      ERROR_MESSAGE.INVALID_NUMBER
    );
  });

  test("숫자가 아닌 문자열 입력 시 오류를 발생시킨다.", () => {
    expect(() => validateRoundNumber("abc")).toThrow(
      ERROR_MESSAGE.INVALID_NUMBER
    );
  });
});
