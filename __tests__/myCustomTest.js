import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import {
  VARIOUS_NAME_TEST_CASES,
  ROUND_TEST_CASE,
  TWO_WINNERS_TEST_CASE,
  EXCEPTION_TEST_CASES,
} from '../data/testCasesData.js';

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
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주', () => {
  describe('기능 테스트', () => {
    test.each(VARIOUS_NAME_TEST_CASES)(
      '$description',
      async ({ inputs, logs }) => {
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([MOVING_FORWARD, STOP]);

        const app = new App();
        await app.run();

        for (const log of logs) {
          expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        }
      }
    );
  });

  describe('기능 테스트 - 각 라운드 출력', () => {
    test('각 라운드 출력 확인', async () => {
      const { inputs, logs } = ROUND_TEST_CASE;
      const MOVING_FORWARD = 4;
      const STOP = 3;
      const logSpy = getLogSpy();

      mockQuestions(inputs);
      mockRandoms([
        MOVING_FORWARD,
        STOP,
        MOVING_FORWARD,
        STOP,
        MOVING_FORWARD,
        STOP,
      ]);

      const app = new App();
      await app.run();

      for (const log of logs) {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      }
    });
  });

  describe('기능 테스트 - 우승자 2인', () => {
    test('우승자 2인', async () => {
      const { inputs, logs } = TWO_WINNERS_TEST_CASE;
      const MOVING_FORWARD = 4;
      const logSpy = getLogSpy();

      mockQuestions(inputs);
      mockRandoms([MOVING_FORWARD, MOVING_FORWARD]);

      const app = new App();
      await app.run();

      for (const log of logs) {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      }
    });
  });

  describe('자동차 경주 예외 테스트', () => {
    test.each(EXCEPTION_TEST_CASES)(
      '입력 값 검증 - 예외 테스트',
      async ({ inputs, expectedError }) => {
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow(expectedError);
      }
    );
  });
});
