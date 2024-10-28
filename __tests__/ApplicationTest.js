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

  // Parameterized Test
  test.each([
    {
      name: "자동차 이름 다섯 글자 초과일 경우",
      inputs: ["pobi,javada"],
    },
    { name: "자동차 이름 공백이 포함될 경우", inputs: ["pobi, woni"] },
    { name: "자동차 이름 중복일 경우", inputs: ["pobi,pobi"] },
    { name: "시도 횟수 숫자 아닐 경우", inputs: ["pobi,woni", "abc"] },
    { name: "시도 횟수 음수일 경우", inputs: ["pobi,woni", "-1"] },
    { name: "시도 횟수 소수일 경우", inputs: ["pobi,woni", "1.5"] },
    { name: "자동차 이름의 입력 값이 없는 경우", inputs: ["", "1"] },
    { name: "시도 횟수의 입력 값이 없는 경우", inputs: ["pobi,woni", ""] },
  ])("$name", async ({ inputs }) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
