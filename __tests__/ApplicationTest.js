import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

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
  test('기능 테스트', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const testCases = [
      {
        inputs: ['pobi,woni', '1'],
        logs: ['pobi : ', 'woni : -', '최종 우승자 : woni'],
        numbers: [STOP, MOVING_FORWARD],
      },
      {
        inputs: ['oms, pobi, woni', '1'],
        logs: ['oms : -', 'pobi : ', 'woni : ', '최종 우승자 : oms'],
        numbers: [MOVING_FORWARD, STOP, STOP],
      },
    ];
    const logSpy = getLogSpy();

    for (const { inputs, logs, numbers } of testCases) {
      mockQuestions(inputs);
      mockRandoms(numbers);

      // when
      const app = new App();
      await app.run();

      // then
      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    }
  });

  test('예외 테스트', async () => {
    // given
    const inputs = [
      ['pobi, javaji'],
      ['pobi,pobi'],
      ['p,woni'],
      ['pobi'],
      ['pobi,!@#$'],
    ];

    for (const input of inputs) {
      mockQuestions(input);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow('[ERROR]');
    }
  });
});
