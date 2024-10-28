import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test.each([
    [
      "기능 테스트",
      ["pobi,woni", "1"],
      [4, 3],
      ["pobi : -", "woni : ", "최종 우승자 : pobi"],
      false
    ],
    [
      "예외 테스트",
      ["pobi,javaji"],
      [],
      [],
      true
    ],
    [
      "숫자 테스트",
      ["pobi,woni", "a"],
      [],
      [],
      true
    ],
    [
      "음수 테스트",
      ["pobi,woni", "-1"],
      [],
      [],
      true
    ],
    [
      "정수 테스트",
      ["pobi,woni", "6.4"],
      [],
      [],
      true
    ]
  ])("%s", async (testName, inputs, randoms, expectedLogs, expectError) => {
    // given
    mockQuestions(inputs);
    if (randoms.length > 0) mockRandoms(randoms);
    const logSpy = getLogSpy();

    // when
    const app = new App();

    // then
    if (expectError) {
      await expect(app.run()).rejects.toThrow("[ERROR]");
    } else {
      await app.run();
      expectedLogs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    }
  });
});