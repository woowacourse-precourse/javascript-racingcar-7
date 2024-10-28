import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

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

describe('자동차 경주게임 통합테스트', () => {
  const ERROR_CASES = [[['car1,car2,carrrrrr']], [['car1,car2', '']], [['']]];

  test.each(ERROR_CASES)('예외 테스트', async (inputs) => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  const MOVING_FORWARD = 4;
  const STOP = 3;
  const PASS_CASES = [
    [
      ['jun,car1,car2', '3'],
      [
        MOVING_FORWARD,
        STOP,
        MOVING_FORWARD,
        STOP,
        STOP,
        MOVING_FORWARD,
        MOVING_FORWARD,
        STOP,
        MOVING_FORWARD,
      ],
      [
        'jun : -',
        'car1 : ',
        'car2 : -',
        'jun : -',
        'car1 : ',
        'car2 : --',
        'jun : --',
        'car1 : ',
        'car2 : ---',
        '최종 우승자 : car2',
      ],
    ],
    [
      ['car1,car2', '2'],
      [MOVING_FORWARD, STOP, STOP, MOVING_FORWARD],
      [
        'car1 : -',
        'car2 : ',
        'car1 : -',
        'car2 : -',
        '최종 우승자 : car1, car2',
      ],
    ],
  ];

  test.each(PASS_CASES)(
    '통과 테스트',
    async (carNames, randomValue, winnerResult) => {
      const logSpy = getLogSpy();

      mockQuestions(carNames);
      mockRandoms(randomValue);

      const app = new App();
      await app.run();

      winnerResult.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    }
  );
});
