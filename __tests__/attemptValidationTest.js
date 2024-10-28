import { ATTEMPT, ERROR_MESSAGE } from "../src/constants/error";
import { attemptValidator } from "../src/validation/attemptValidator";

describe("자동차 경주 attemptValidationTest", () => {
  test("횟수를 입력하지 않았을 경우", () => {
    expect(() => attemptValidator("")).toThrow(
      ERROR_MESSAGE + ATTEMPT.EMPTY_TRY
    );
  });

  test("자동차 이름이 쉼표로 끝날 경우", () => {
    expect(() => attemptValidator("4k")).toThrow(
      ERROR_MESSAGE + ATTEMPT.NOT_NUMBER
    );
  });
});
