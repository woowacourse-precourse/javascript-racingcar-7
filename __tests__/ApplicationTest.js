import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../src/constants/constants.js";
import { validateCarNameCount } from "../src/validation/validateCarName/validateCarNameCount.js";
import { validateCarNameLength } from "../src/validation/validateCarName/validateCarNameLength.js";
import { validateCarNameSeparator } from "../src/validation/validateCarName/validateCarNameSeparator.js";
import { validateDuplicateCarNames } from "../src/validation/validateCarName/validateDuplicateCarNames.js";
import { validateAttemptsNumber } from "../src/validation/validateAttemptsNumber/validateAttemptsNumber.js";
import { validateCarNameOnlyLetters } from "../src/validation/validateCarName/validateCarNameOnlyLetters.js";
import { validateCarName } from "../src/validation/validateCarName/index.js";

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

  test("시도 횟수 입력 값이 숫자가 아닌 경우", () => {
    expect(() => validateAttemptsNumber("a")).toThrow(
      ERROR_MESSAGES.ATTEMPTS_MUST_BE_NUMERIC
    );
  });

  test.each([
    ["emma/sophia/mia", ERROR_MESSAGES.INVALID_NAME_SEPARATOR],
    ["emma,sophia", ERROR_MESSAGES.CAR_NAME_TOO_LONG],
    ["123, ^&*", ERROR_MESSAGES.NAME_MUST_BE_KOREAN_OR_ENGLISH],
    ["emma", ERROR_MESSAGES.MINIMUM_TWO_CARS_REQUIRED],
    ["emma,jin,emma", ERROR_MESSAGES.DUPLICATE_CAR_NAMES],
    ["emma,,jin", ERROR_MESSAGES.EMPTY_STRING],
    ["emma,jin,", ERROR_MESSAGES.EMPTY_STRING],
  ])("validateCarName(%s) throws %s", (input, expected) => {
    expect(() => validateCarName(input)).toThrow(expected);
  });
});
