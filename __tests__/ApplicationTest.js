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
  test("기능 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  describe("예외 테스트", () => {
    const errorCases = [
      {
        name: "자동차 이름 허용 길이 초과",
        inputs: ["pobi,javajava"],
        expectedError: "[ERROR]",
      },
      {
        name: "자동차 이름이 중복된 경우",
        inputs: ["pobi,woni,woni"],
        expectedError: "[ERROR]",
      },
      {
        name: "숫자가 아닌 시도 횟수",
        inputs: ["pobi,woni", "a"],
        expectedError: "[ERROR]",
      },
      {
        name: "자동차 이름 입력 안 함",
        inputs: [""],
        expectedError: "[ERROR]",
      },
    ];

    test.each(errorCases)("$name", async ({ inputs, expectedError }) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow(expectedError);
    });
  });
});
