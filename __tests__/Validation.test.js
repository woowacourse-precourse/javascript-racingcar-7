import { ERROR } from "../src/constants/constants.js";
import Validation from "../src/View/Validation.js";

describe("Validation", () => {
  describe("자동차 이름 유효성 검사", () => {
    test.each([
      { carNames: ["pobi", "jun"], shouldThrow: false },
      {
        carNames: ["pobi", "wo@ni"],
        shouldThrow: true,
        expectedError: ERROR.specialChar,
      },
      {
        carNames: ["pobi", "abcdef"],
        shouldThrow: true,
        expectedError: ERROR.moreThanFiveLetters,
      },
      {
        carNames: [" po bi", "woni"],
        shouldThrow: true,
        expectedError: ERROR.space,
      },
      {
        carNames: ["pobi", "pobi"],
        shouldThrow: true,
        expectedError: ERROR.duplicate,
      },
      {
        carNames: ["pobi", "", "woni"],
        shouldThrow: true,
        expectedError: ERROR.emptyName,
      },
    ])(
      "자동차 이름 검증 - $carNames",
      ({ carNames, shouldThrow, expectedError }) => {
        if (shouldThrow) {
          expect(() => Validation.validateCarNames(carNames)).toThrow(
            expectedError
          );
        } else {
          expect(() => Validation.validateCarNames(carNames)).not.toThrow();
        }
      }
    );
  });

  describe("시도 횟수 유효성 검사", () => {
    test.each([
      { repeatTime: 5, shouldThrow: false },
      { repeatTime: 0, shouldThrow: true, expectedError: ERROR.tryCount },
      { repeatTime: -3, shouldThrow: true, expectedError: ERROR.tryCount },
      { repeatTime: "abc", shouldThrow: true, expectedError: ERROR.tryCount },
      { repeatTime: "1a2", shouldThrow: true, expectedError: ERROR.tryCount },
    ])(
      "시도 횟수 검증 - $repeatTime",
      ({ repeatTime, shouldThrow, expectedError }) => {
        if (shouldThrow) {
          expect(() => Validation.validateRepeatTime(repeatTime)).toThrow(
            expectedError
          );
        } else {
          expect(() => Validation.validateRepeatTime(repeatTime)).not.toThrow();
        }
      }
    );
  });
});
