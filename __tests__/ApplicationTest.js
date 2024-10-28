import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../src/App.js";
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

  test("기본 예외 테스트", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("빈 문자열 예외 테스트", async () => {
    const inputs = [""];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.EMPTY_CAR_NAMES);
  });

  test("자동차 이름 중복 예외 테스트", async () => {
    const inputs = ["ho2,ho2"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.DUPLICATE_CAR_NAME);
  });

  test("자동차 이름 길이 초과 예외 테스트", async () => {
    const inputs = ["ho0010,ho0"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow(
      ERROR_MESSAGES.INVALID_CAR_NAME_LENGTH
    );
  });

  test("시도 횟수가 숫자가 아닐 때 예외 테스트", async () => {
    const inputs = ["ho,ho1", "abc"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow(
      ERROR_MESSAGES.INVALID_ATTEMPT_COUNT
    );
  });

  test("시도 횟수가 0일 때 예외 테스트", async () => {
    const inputs = ["pobi,ho", 0];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.ZERO_ATTEMPT_COUNT);
  });

  test("시도 횟수가 음수일 때 예외 테스트", async () => {
    const inputs = ["pobi,ho", -1];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow(
      ERROR_MESSAGES.NEGATIVE_ATTEMPT_COUNT
    );
  });

  test("시도 횟수가 정수가 아닐 때 예외 테스트", async () => {
    const inputs = ["pobi,ho", 0.1];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow(
      ERROR_MESSAGES.NON_INTEGER_ATTEMPT_COUNT
    );
  });
});
