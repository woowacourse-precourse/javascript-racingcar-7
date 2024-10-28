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

  test("기능 테스트 - 동일한 거리를 이동한 경우", async () => {
    const MOVING_FORWARD = 4;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : -", "최종 우승자 : pobi, woni"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, MOVING_FORWARD]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트 - 자동차 이름 길이가 5 초과인 경우", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 중복된 자동차 이름이 입력된 경우", async () => {
    const inputs = ["pobi,pobi"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 자동차 이름이 없는 경우", async () => {
    const inputs = [""];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test.each([
    ["pobi,woni", "a"],
    ["pobi,woni", "-1"],
    ["pobi,woni", " "],
    ["pobi,woni", ""]
  ])("예외 테스트 - 시도 횟수에 자연수 아닌 값이 입력된 경우", async (carNames, attemptCount) => {
    // given
    const inputs = [carNames, attemptCount];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

});
