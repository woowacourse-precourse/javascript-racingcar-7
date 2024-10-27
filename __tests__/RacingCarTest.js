import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../src/constant";

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
    const inputs = ["pobi,woni,jun", "2"];
    const logs = ["pobi : -", "woni : ", "jun : --", "최종 우승자 : jun"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
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

  test("예외 테스트 - 차 이름 길이 초과", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      `[ERROR] ${ERROR_MESSAGES.EXCEED_CAR_LENGTH}`
    );
  });

  test("예외 테스트 - 시도 횟수 유효하지 않음(0 입력)", async () => {
    // given
    const inputs = ["pobi,woni", "0"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      `[ERROR] ${ERROR_MESSAGES.NO_COUNT}`
    );
  });

  test("예외 테스트 - 시도 횟수 유효하지 않음(입력값 없음)", async () => {
    // given
    const inputs = ["pobi,woni", ""];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      `[ERROR] ${ERROR_MESSAGES.NO_COUNT}`
    );
  });

  test("예외 테스트 - 자동차 이름 입력 없음", async () => {
    // given
    const inputs = [""];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      `[ERROR] ${ERROR_MESSAGES.NO_CAR_INPUT}`
    );
  });

  test("예외 테스트 - 실행 횟수에 숫자가 아닌 값이 들어간 경우", async () => {
    // given
    const inputs = ["pobi,woni", "zero"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      `[ERROR] ${ERROR_MESSAGES.INVALID_COUNT_INPUT}`
    );
  });
});
