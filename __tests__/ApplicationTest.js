import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../src/message.js";
import { validateCarNames, validateCount } from "../src/error.js";

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


describe("App 추가 테스트", () => {

  test("자동차 이름이 한 글자인 경우", async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["a,b", "2"];
    const logs = ["a : -", "b : "];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기회 수가 0일 때 에러 발생", async () => {
    const inputs = ["pobi,woni", "0"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");});
});

describe("error 추가 테스트", () => {
  test("각 이름의 길이가 5자를 초과 시 에러 발생", () => {
    const carNames = ["ahhyun"];
    expect(() => validateCarNames(carNames)).toThrow(ERROR_MESSAGE.NAME_LENGTH_EXCEED);
  });

  test("카운트가 숫자가 아닐 경우 에러 발생", () => {
    expect(() => validateCount("abc")).toThrow(ERROR_MESSAGE.NOT_NUMBER);
  });

  test("카운트가 정수가 아닌 경우 에러 발생", () => {
    expect(() => validateCount("3.5")).toThrow(ERROR_MESSAGE.NOT_INTEGER);
  });

  test("카운트가 0인 경우 에러 발생", () => {
    expect(() => validateCount(0)).toThrow(ERROR_MESSAGE.NUM_IS_ZERO);
  });

  test("카운트가 음수인 경우 에러 발생", () => {
    expect(() => validateCount(-1)).toThrow(ERROR_MESSAGE.NEGATIVE_NUMBER);
  });
  
});
