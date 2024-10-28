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

describe("정상 케이스", () => {
  const MOVING_FORWARD = 4;
  const STOP = 3;

  test.each([
    {
      name: "단독 우승 테스트",
      inputs: ["pobi,woni", "1"],
      logs: ["pobi : -", "woni : ", "최종 우승자 : pobi"],
      randoms: [MOVING_FORWARD, STOP],
    },
    {
      name: "공동 우승 테스트",
      inputs: ["pobi,woni,jun", "2"],
      logs: ["pobi : --", "woni : --", "jun : -", "최종 우승자 : pobi, woni"],
      randoms: [
        MOVING_FORWARD,
        MOVING_FORWARD,
        STOP,
        MOVING_FORWARD,
        MOVING_FORWARD,
        MOVING_FORWARD,
      ],
    },
    {
      name: "자동차 이름에 공백 또는 숫자, 특수문자 포함 시 테스트",
      inputs: ["po bi,woni!,123", "1"],
      logs: ["po bi : ", "woni! : -", "123 : ", "최종 우승자 : woni!"],
      randoms: [STOP, MOVING_FORWARD, STOP],
    },
    {
      name: "자동차 이름을 쉼표+공백(, )로 구분하여 입력 시 테스트",
      inputs: ["pobi, woni", "3"],
      logs: ["pobi : ---", "woni : -", "최종 우승자 : pobi"],
      randoms: [
        MOVING_FORWARD,
        MOVING_FORWARD,
        MOVING_FORWARD,
        STOP,
        MOVING_FORWARD,
        STOP,
      ],
    },
  ])("$name", async ({ inputs, logs, randoms }) => {
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(randoms);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe("에러 케이스", () => {
  test.each([
    { name: "자동차 이름 5자 초과 시 테스트", inputs: ["pobi,javaji"] },
    { name: "자동차 이름 중복 시 테스트", inputs: ["pobi,pobi"] },
    { name: "자동차 이름 미입력 시 테스트", inputs: [""] },
    { name: "경주 횟수가 음수일 시 테스트", inputs: ["pobi,woni", "-1"] },
    { name: "경주 횟수가 0일 시 테스트", inputs: ["pobi,woni", "0"] },
    { name: "경주 횟수가 소수일 시 테스트", inputs: ["pobi,woni", "1.5"] },
    { name: "경주 횟수가 숫자가 아닐 시 테스트", inputs: ["pobi,woni", "a"] },
    { name: "경주 횟수 미입력 시 테스트", inputs: ["pobi,woni", ""] },
  ])("$name", async ({ inputs }) => {
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
