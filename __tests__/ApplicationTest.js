import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import {
  CAR_NAME_TEST_CASES,
  GAME_ROUNDS_TEST_CASES,
  TEST_DESCRIPTIONS,
} from '../src/utils/constants.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe(TEST_DESCRIPTIONS.MAIN, () => {
  test(TEST_DESCRIPTIONS.BASE.FEATURE, async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
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

  test(TEST_DESCRIPTIONS.BASE.EXCEPTION, async () => {
    // given
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  describe(TEST_DESCRIPTIONS.CAR_NAME.GROUP, () => {
    test.each(TEST_DESCRIPTIONS.CAR_NAME.CASES)(
      '%s',
      async (description, testCase) => {
        // given
        const { input, errorMessage } = CAR_NAME_TEST_CASES[testCase];
        const carNames = input.join(',');
        const validRounds = String(
          GAME_ROUNDS_TEST_CASES.VALID_NUMBER.expected,
        );
        mockQuestions([carNames, validRounds]);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow(errorMessage);
      },
    );
  });

  describe(TEST_DESCRIPTIONS.GAME_ROUNDS.GROUP, () => {
    test.each(TEST_DESCRIPTIONS.GAME_ROUNDS.CASES)(
      '%s',
      async (description, testCase) => {
        // given
        const { input, errorMessage } = GAME_ROUNDS_TEST_CASES[testCase];
        const validCarNames = CAR_NAME_TEST_CASES.VALID_NAMES.input
          .slice(0, 2)
          .join(',');
        mockQuestions([validCarNames, input]);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow(errorMessage);
      },
    );
  });
});
