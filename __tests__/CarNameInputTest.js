import { getCarNames } from "../src/inputHandlers.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../src/constants.js";

const mockConsoleInput = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockResolvedValue(input);
};

describe("자동차 이름 검사", () => {
  test("자동차 이름 길이가 5자 이하인지 검사", async () => {
    mockConsoleInput("pobi,woni,testerrorexample");

    await expect(getCarNames()).rejects.toThrow(ERROR_MESSAGES.CAR_NAME_LENGTH);
  });
  test("자동차 이름이 공백인 경우 검사", async () => {
    mockConsoleInput("pobi, ,woni");

    await expect(getCarNames()).rejects.toThrow(ERROR_MESSAGES.CAR_NAME_LENGTH);
  });
  test("자동차 이름에 유효하지 않은 구분 기호가 포함된 경우 검사", async () => {
    mockConsoleInput("철수;영희:짱구");

    await expect(getCarNames()).rejects.toThrow(
      ERROR_MESSAGES.INVALID_SEPARATOR
    );
  });

  test("자동차 이름이 중복되지 않았는지 검사", async () => {
    mockConsoleInput("test,test");

    await expect(getCarNames()).rejects.toThrow(ERROR_MESSAGES.SAME_CAR_NAME);
  });
});
