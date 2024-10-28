import { carValidation } from "../src/validations/carValidation";
import { CAR_ERROR_MESSAGES } from "../src/constants/errorMessage";
import { roundCountValidation } from "../src/validations/roundCountValidation";
import { ROUND_COUNT_ERROR_MESSAGES } from "../src/constants/errorMessage";

describe("자동차 이름에 대한 예외 발생", () => {
  test("자동차 이름을 빈 문자열로 입력시 예외 발생", () => {
    const carNames = ["", "pobi", "crong"];
    expect(() => carValidation(carNames)).toThrow(
      CAR_ERROR_MESSAGES.EMPTY_NAME
    );
  });

  test("자동차 이름이 5자 초과될 시 예외 발생", () => {
    const carNames = ["pobi", "haindiii"];
    expect(() => carValidation(carNames)).toThrow(
      CAR_ERROR_MESSAGES.INVALID_LENGTH
    );
  });

  test("자동차 이름 중 중복된 이름이 포함될 시 예외 발생", () => {
    const carNames = ["pobi", "pobi", "crong"];
    expect(() => carValidation(carNames)).toThrow(
      CAR_ERROR_MESSAGES.DUPLICATE_NAME
    );
  });

  test("자동차 갯수가 최소 2대 미만인 경우 예외 발생", () => {
    const carNames = ["pobi"];
    expect(() => carValidation(carNames)).toThrow(
      CAR_ERROR_MESSAGES.MINIMUM_COUNT
    );
  });
});

describe("시도 횟수에 대한 예외 발생", () => {
  test("시도 횟수가 빈 문자열일 경우 에러 메시지를 출력한다", () => {
    expect(() => {
      roundCountValidation("");
    }).toThrow(ROUND_COUNT_ERROR_MESSAGES.EMPTY_COUNT);
  });

  test.each([["0"], ["-1"], ["abc"], ["3.5"]])(
    "시도 횟수가 '%s'일 경우 에러 메시지를 출력한다",
    (invalidInput) => {
      expect(() => {
        roundCountValidation(invalidInput);
      }).toThrow(ROUND_COUNT_ERROR_MESSAGES.INVALID_COUNT);
    }
  );
});
