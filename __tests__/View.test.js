import { Console } from "@woowacourse/mission-utils";
import { ERROR } from "../src/constants/constants.js";
import View from "../src/View/View.js";

describe("View", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("자동차 이름 입력 유효성 검사", () => {
    test.each([
      { input: "pobi,,woni", expectedError: ERROR.emptyName },
      { input: "pobi,abcdef", expectedError: ERROR.moreThanFiveLetters },
    ])(
      "입력값 '$input'에 대해 예외 발생 확인",
      async ({ input, expectedError }) => {
        Console.readLineAsync = jest.fn().mockResolvedValue(input);
        await expect(View.readCarsName()).rejects.toThrow(expectedError);
      }
    );
  });

  describe("시도 횟수 입력 유효성 검사", () => {
    test.each([
      { input: "abc", expectedError: ERROR.tryCount },
      { input: "0", expectedError: ERROR.tryCount },
    ])(
      "입력값 '$input'에 대해 예외 발생 확인",
      async ({ input, expectedError }) => {
        Console.readLineAsync = jest.fn().mockResolvedValue(input);
        await expect(View.readRepeatTime()).rejects.toThrow(expectedError);
      }
    );
  });
});
