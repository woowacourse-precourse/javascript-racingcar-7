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

  test("기능 테스트", async () => {
    // given
    const STOP = 3;
    const MOVING_FORWARD1 = 4;
    const MOVING_FORWARD2 = 4;
    const inputs = ["pobi,wonin,jun", "1"];
    const logs = [
      "pobi : ",
      "wonin : -",
      "jun : -",
      "최종 우승자 : wonin, jun",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([STOP, MOVING_FORWARD1, MOVING_FORWARD2]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트", async () => {
    // given
    const STOP1 = 1;
    const STOP3 = 3;
    const MOVING_FORWARD10 = 10;
    const MOVING_FORWARD4 = 4;
    const inputs = ["pobi,wonin,j", "3"];
    const logs = [
      "pobi : --",
      "wonin : --",
      "j : --",
      "최종 우승자 : pobi, wonin, j",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD4,
      STOP1,
      MOVING_FORWARD10,
      STOP3,
      7,
      2,
      5,
      8,
      9,
    ]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트", async () => {
    // given
    const STOP1 = 1;
    const STOP3 = 3;
    const MOVING_FORWARD10 = 10;
    const MOVING_FORWARD4 = 4;
    const inputs = ["pobi,wonin,j", "3"];
    const logs = ["pobi : ---", "wonin : ", "j : ---", "최종 우승자 : pobi, j"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD4,
      STOP1,
      MOVING_FORWARD10,
      MOVING_FORWARD10,
      STOP3,
      MOVING_FORWARD4,
      MOVING_FORWARD4,
      STOP1,
      MOVING_FORWARD10,
    ]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트", async () => {
    // given
    const STOP1 = 1;
    const STOP3 = 3;
    const MOVING_FORWARD10 = 10;
    const MOVING_FORWARD4 = 4;
    const inputs = ["pobi,woni,jun", "3"];
    const logs = ["pobi : --", "woni : -", "jun : ---", "최종 우승자 : jun"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD4,
      STOP1,
      MOVING_FORWARD10,
      MOVING_FORWARD10,
      STOP3,
      MOVING_FORWARD4,
      STOP1,
      STOP1,
      MOVING_FORWARD10,
    ]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
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

  test("예외 테스트", async () => {
    // given
    const inputs = ["pobi,java,"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트", async () => {
    // given
    const inputs = ["pobi,,java"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트", async () => {
    // given
    const inputs = ["pobi,javan"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
