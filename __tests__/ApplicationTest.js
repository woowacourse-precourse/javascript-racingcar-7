import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../src/constants.js";

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
});

describe("자동차 경주 - 에러 테스트", () => {
  test("빈 입력 에러", async () => {
    // given
    const inputs = [""];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.EMPTY_INPUT);
  });

  test("자동차 이름이 5자를 초과하는 경우 에러", async () => {
    // given
    const inputs = ["pobi,javaji"]; // "javaji"는 5자를 초과
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.NAME_LENGTH(5));
  });

  test("자동차 이름이 중복되는 경우 에러", async () => {
    // given
    const inputs = ["pobi,pobi"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.DUPLICATE_NAME);
  });

  test("시도 횟수에 유효하지 않은 값 입력 시 에러", async () => {
    // 테스트할 입력값들: 1 미만의 정수, 실수, 숫자가 아닌 값
    const invalidInputs = ["0", "3.5", "three"];

    for (const input of invalidInputs) {
      const inputs = ["pobi,woni", input];
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.TRIALS_NUMBER);
    }
  });
});
