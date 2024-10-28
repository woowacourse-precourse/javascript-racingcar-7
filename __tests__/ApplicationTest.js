import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { CAR_NAME_ERROR, TRY_NUMBER_ERROR } from "../src/Message/Message.js";

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
  test("시도한 횟수 1번, 단독 우승자", async () => {
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

  test("시도한 횟수 3번, 공동 우승자", async () => {
    // given
    const MOVING_FORWARD = 6;
    const STOP = 2;
    const inputs = ["pobi,woni,jung", "3"];
    const logs = [
      "pobi : -",
      "woni : ",
      "jung : ",
      "pobi : -",
      "woni : -",
      "jung : -",
      "pobi : --",
      "woni : -",
      "jung : --",
      "최종 우승자 : pobi, jung",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      STOP,
      STOP,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
    ]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe("자동차 이름 유효성 검사", () => {
  test("자동차 1대 이하", async () => {
    // given
    const inputs = ["pobi"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(CAR_NAME_ERROR.MIN_CARS);
  });

  test("자동차 이름 빈 문자열", async () => {
    // given
    const inputs = [",pobi"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(CAR_NAME_ERROR.EMPTY_NAME);
  });

  test("자동차 이름 5자 이상", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(CAR_NAME_ERROR.OVER_FIVE_LENGTH);
  });

  test("중복된 자동차 이름", async () => {
    // given
    const inputs = ["pobi,pobi"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(CAR_NAME_ERROR.DUPLICATE_NAME);
  });
});

describe("시도한 횟수 유효성 검사", () => {
  test("숫자가 아닌 경우", async () => {
    // given
    const inputs = ["pobi,woni", "b"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(TRY_NUMBER_ERROR.IS_NOT_NUMBER);
  });

  test("정수가 아닌 경우", async () => {
    // given
    const inputs = ["pobi,woni", "1.1"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(TRY_NUMBER_ERROR.IS_NOT_INTEGER);
  });

  test("양수가 아닌 경우", async () => {
    // given
    const inputs = ["pobi,woni", "-2"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(TRY_NUMBER_ERROR.IS_NOT_POSITIVE);
  });
});
