import { Console, Random } from "@woowacourse/mission-utils";
import { startRaceGame } from "../src/services/carRace";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: { print: jest.fn() },
  Random: { pickNumberInRange: jest.fn() },
}));

describe("자동차 경주 기능 테스트", () => {
  beforeEach(() => {
    Console.print.mockClear();
    Random.pickNumberInRange.mockClear();
  });

  test("기능 테스트", () => {
    const carNames = ["pobi", "woni", "one"];
    const raceCount = 2;

    const mockRandomValues = [4, 3, 3, 3, 4, 4, 3, 3, 3];
    mockRandomValues.forEach((value) =>
      Random.pickNumberInRange.mockReturnValueOnce(value)
    );

    const expectedLogs = [
      "pobi : -",
      "woni : ",
      "one : ",
      "",
      "pobi : -",
      "woni : -",
      "one : -",
      "",
      "최종 우승자 : pobi, woni, one",
    ];

    startRaceGame(carNames, raceCount);

    expectedLogs.forEach((expectedLog, index) => {
      expect(Console.print).toHaveBeenNthCalledWith(index + 1, expectedLog);
    });
  });
});
