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
    {
      title: "기능 테스트",
      inputs: ["pobi,woni", "1"],
      MOVING_FORWARD: 4,
      STOP: 3,
      logs: ["pobi : -", "woni : ", "최종 우승자 : pobi"],
      throwError: false,
    },
    {
      title: "예외 테스트 - 이름이 5글자 이상",
      inputs: ["pobi,javaji"],
      MOVING_FORWARD: 4,
      STOP: 3,
      logs: [],
      throwError: true,
    },
    {
      title: "예외 테스트 - 같은 이름",
      inputs: ["pobi,pobi,pororo"],
      MOVING_FORWARD: 4,
      STOP: 3,
      logs: [],
      throwError: true,
    },
    {
      title: "예외 테스트 - 이름 없음",
      inputs: ["pobi,,woni,abc"],
      MOVING_FORWARD: 4,
      STOP: 3,
      logs: [],
      throwError: true,
    },
    {
      title: "예외 테스트 - 라운드 0회",
      inputs: ["pobi,woni", "0"],
      MOVING_FORWARD: 4,
      STOP: 3,
      logs: [],
      throwError: true,
    },
    {
      title: "예외 테스트 - 라운드가 문자인 경우",
      inputs: ["pobi,woni", "absdfe"],
      MOVING_FORWARD: 4,
      STOP: 3,
      logs: [],
      throwError: true,
    },
    {
      title: "예외 테스트 - 라운드가 문자열인 경우",
      inputs: ["pobi,woni", "absdfe"],
      MOVING_FORWARD: 4,
      STOP: 3,
      logs: [],
      throwError: true,
    },
    {
      title: "예외 테스트 - 라운드가 음수인 경우",
      inputs: ["pobi,woni", "-10"],
      MOVING_FORWARD: 4,
      STOP: 3,
      logs: [],
      throwError: true,
    },
  ])(
    "$description",
    async ({ inputs, MOVING_FORWARD, STOP, logs, throwError }) => {
      const logSpy = getLogSpy();
      mockQuestions(inputs);
      mockRandoms([MOVING_FORWARD, STOP]);

      const app = new App();

      if (throwError) {
        await expect(app.run()).rejects.toThrow("[ERROR]");
      } else {
        await app.run();
        logs.forEach((log) => {
          expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
      }
    }
  );
});
