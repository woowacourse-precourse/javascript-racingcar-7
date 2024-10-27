import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import {
  CAR_NAME_TEST_CASES,
  GAME_ROUNDS_TEST_CASES,
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

describe('자동차 경주', () => {
  test('기능 테스트', async () => {
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

  test('예외 테스트', async () => {
    // given
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  describe('자동차 이름 검증', () => {
    test('자동차 이름이 빈 문자열인 경우 에러 발생', async () => {
      // given
      const { input, errorMessage } = CAR_NAME_TEST_CASES.EMPTY_NAME;
      const carNames = input.join(',');
      const rounds = GAME_ROUNDS_TEST_CASES.VALID_NUMBER.input;
      mockQuestions([carNames, rounds]);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow(errorMessage);
    });

    test('자동차 이름이 공백인 경우 에러 발생', async () => {
      // given
      const { input, errorMessage } = CAR_NAME_TEST_CASES.EMPTY_NAME_WITH_SPACE;
      const carNames = input.join(',');
      const rounds = GAME_ROUNDS_TEST_CASES.VALID_NUMBER.input;
      mockQuestions([carNames, rounds]);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow(errorMessage);
    });

    test('자동차 이름이 5자를 초과하는 경우 에러 발생', async () => {
      // given
      const { input, errorMessage } = CAR_NAME_TEST_CASES.NAME_TOO_LONG;
      const carNames = input.join(',');
      const rounds = GAME_ROUNDS_TEST_CASES.VALID_NUMBER.input;
      mockQuestions([carNames, rounds]);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow(errorMessage);
    });

    test('중복된 자동차 이름이 있는 경우 에러 발생', async () => {
      // given
      const { input, errorMessage } = CAR_NAME_TEST_CASES.DUPLICATE_NAME;
      const carNames = input.join(',');
      const rounds = GAME_ROUNDS_TEST_CASES.VALID_NUMBER.input;
      mockQuestions([carNames, rounds]);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow(errorMessage);
    });
  });
});
