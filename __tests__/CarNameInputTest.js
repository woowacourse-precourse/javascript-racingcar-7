import { getCarNames } from "../src/inputHandlers.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockConsoleInput = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockResolvedValue(input);
};

describe("자동차 이름 검사", () => {
  test("자동차 이름 길이가 5자 이하인지 검사", async () => {
    mockConsoleInput("pobi,woni,testerrorexample");

    await expect(getCarNames()).rejects.toThrow(
      "[ERROR] 자동차 이름은 1자 이상 5자 이하야 합니다."
    );
  });
  test("자동차 이름이 공백인 경우 검사", async () => {
    mockConsoleInput("pobi, ,woni");

    await expect(getCarNames()).rejects.toThrow(
      "[ERROR] 자동차 이름은 1자 이상 5자 이하야 합니다."
    );
  });
});
