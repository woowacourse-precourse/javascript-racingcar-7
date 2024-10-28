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

  test("기능 테스트2", async () => {
    // given
    // const MOVING_FORWARD = 4;
    // const STOP = 3;
    const inputs = ["치킨,닭,다리", "9"];
    const logs = [
      "치킨 : ---",
      "닭 : ---",
      "다리 : ---",
      "최종 우승자 : 치킨, 닭, 다리",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([4, 4, 4, 4, 4, 4, 4, 4, 4]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트3", async () => {
    // given
    // const MOVING_FORWARD = 4;
    // const STOP = 3;
    const inputs = ["소형차,중형차,대형차", "3"];
    const logs = [
      "소형차 : ",
      "중형차 : ",
      "대형차 : ---",
      "최종 우승자 : 대형차",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([1, 2, 9, 1, 2, 9, 2, 3, 9]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("자동차 이름이 5자를 초과하는 경우", async () => {
    // given
    const inputs = ["우테코,우테콩콩,우테꽁꽁꽁꽁"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
