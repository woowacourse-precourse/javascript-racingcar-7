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
  test.each([
    {
      description: "이동 횟수가 음수일 경우",
      inputs: ["pobi,woni", "-3"],
      errorMessage: "[ERROR]",
    },
    {
      description: "이동 횟수가 문자열일 경우",
      inputs: ["pobi,woni,taeyoung", "test"],
      errorMessage: "[ERROR]",
    },
    {
      description: "자동차 이름이 중복일 경우",
      inputs: ["taeyoung,taeyoung", "10"],
      errorMessage: "[ERROR]",
    },
    {
      description: "자동차 이름 길이 초과",
      inputs: ["pobi,javaji"],
      errorMessage: "[ERROR]",
    },
  ])("$description", async ({ inputs, errorMessage }) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(errorMessage);
  });
});
