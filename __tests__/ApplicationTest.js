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

  const exceptionTestCases = [
    { name: "예외 테스트", inputs: ["pobi,javaji"] },
    { name: "자동차 이름 공백 포함 예외 테스트", inputs: ["pobi, woni"] },
    { name: "자동차 이름 중복 예외 테스트", inputs: ["pobi,pobi"] },
    {
      name: "자동차 이름 길이 초과 예외 테스트",
      inputs: ["pobi,javada"],
    },
    { name: "시도 횟수 문자열 예외 테스트", inputs: ["pobi,woni", "abc"] },
    { name: "시도 횟수 음수 예외 테스트", inputs: ["pobi,woni", "-1"] },
    { name: "시도 횟수 소수 예외 테스트", inputs: ["pobi,woni", "1.5"] },
  ];

  exceptionTestCases.forEach(({ name, inputs }) => {
    test(name, async () => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
  });
});


test.each()();