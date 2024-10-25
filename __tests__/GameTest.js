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

describe("자동차 경주 테스트", () => {
  it.each([
    ["phobi,mini,jenny", 1, [4, 4, 4], ["phobi : -", "mini : -", "jenny : -"]],
    ["phobi,mini,jenny", 1, [3, 3, 3], ["phobi : ", "mini : ", "jenny : "]],
  ])(
    "전진 여부 테스트",
    async (inputList, tryCount, randomList, expectedLogs) => {
      // given
      const logSpy = getLogSpy();
      mockQuestions([inputList, tryCount]);
      mockRandoms(randomList);

      // when
      const app = new App();
      await app.run();

      // then
      const actualLogs = logSpy.mock.calls.slice(1, 4);
      expectedLogs.forEach((log, index) =>
        expect(actualLogs[index][0]).toBe(log)
      );
    }
  );
});

describe("우승자 테스트", () => {
  it.each([
    ["phobi,mini,jenny", 1, [4, 4, 4], "최종 우승자 : phobi, mini, jenny"],
    ["phobi,mini,jenny", 1, [5, 3, 3], "최종 우승자 : phobi"],
  ])(
    "단독 우승 또는 공동 우승",
    async (inputList, tryCount, randomList, expectedWinner) => {
      // given
      const logSpy = getLogSpy();
      mockQuestions([inputList, tryCount]);
      mockRandoms(randomList);

      // when
      const app = new App();
      await app.run();

      // then
      const lastLog = logSpy.mock.calls[logSpy.mock.calls.length - 1][0];
      expect(lastLog).toBe(expectedWinner);
    }
  );
});
