import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { validateCarNameLength } from "../src/validation/validateCarName/validateCarNameLength.js";
import { ERROR_MESSAGES } from "../src/constants/constants.js";
import { validateCarNameSeparator } from "../src/validation/validateCarName/validateCarNameSeparator.js";
import { validateCarNameOnlyLetters } from "../src/validation/validateCarName/validateCarNameOnlyLetters.js";
import { validateCarNameCount } from "../src/validation/validateCarName/validateCarNameCount.js";
import { validateDuplicateCarNames } from "../src/validation/validateCarName/validateDuplicateCarNames.js";
import { validateAttemptsNumber } from "../src/validation/validateAttemptsNumber/validateAttemptsNumber.js";

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

  test("입력된 자동차 이름이 쉼표(,)가 아닌 다른 구분자를 포함한 경우", () => {
    expect(() => validateCarNameSeparator("emma/sophia/mia")).toThrow(
      ERROR_MESSAGES.INVALID_NAME_SEPARATOR
    );
  });

  test("경주할 자동차 이름이 5자를 초과하는 경우", () => {
    expect(() => validateCarNameLength(["emma", "sophia"])).toThrow(
      ERROR_MESSAGES.CAR_NAME_TOO_LONG
    );
  });

  test("자동차 이름은 한글 또는 영어만 입력할 수 있다. 그렇지 않은 경우", () => {
    expect(() => validateCarNameOnlyLetters(["123", "^&*"])).toThrow(
      ERROR_MESSAGES.NAME_MUST_BE_KOREAN_OR_ENGLISH
    );
  });

  test("경주할 자동차가 2대 미만일 경우", () => {
    expect(() => validateCarNameCount(["emma"])).toThrow(
      ERROR_MESSAGES.MINIMUM_TWO_CARS_REQUIRED
    );
  });

  test("경주할 자동차 이름이 중복된 경우", () => {
    expect(() => validateDuplicateCarNames(["emma", "sophia", "emma"])).toThrow(
      ERROR_MESSAGES.DUPLICATE_CAR_NAMES
    );
  });

  test("시도 횟수 입력 값이 숫자가 아닌 경우", () => {
    expect(() => validateAttemptsNumber("a")).toThrow(
      ERROR_MESSAGES.ATTEMPTS_MUST_BE_NUMERIC
    );
  });
});
