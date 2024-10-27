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

  test("우승자 선정 기능 테스트", () => {
    const app = new App();
    const carNames = ["pobi", "woni", "java"];
    const distances = [3, 5, 5];
    const winners = app.determineWinners(carNames, distances);
    expect(winners).toEqual(["woni", "java"]);
  });

  test("자동차 전진 기능 테스트", () => {
    // given
    const carNames = ["pobi", "woni"];
    const attempts = 3;
    const distances = Array(carNames.length).fill(0);
    const logSpy = getLogSpy();

    mockRandoms([4, 4, 4, 4, 4, 4]);

    const app = new App();
    for (let i = 0; i < attempts; i++) {
      app.moveCars(carNames, distances);
    }

    // then
    expect(distances.length).toBe(carNames.length);
    distances.forEach((distance) => {
      expect(distance).toBeGreaterThan(0); // 모든 자동차가 전진했는지 확인
    });
  });

  test("자동차 이름 부여 기능 테스트", () => {
    const app = new App();
    const carNames = ["pobi", "woni", "java"];
    const isValid = app.validateCarNames(carNames);
    expect(isValid).toBe(true);

    const invalidCarNames = ["pobi", "woni", "javacode"];
    const isInvalid = app.validateCarNames(invalidCarNames);
    expect(isInvalid).toBe(false);
  });

  test("예외 테스트", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
