import { MissionUtils } from '@woowacourse/mission-utils';
import GameController from '../src/controller/GameController.js';

const mockQuestions = (inputs) => {
  let callIndex = 0;
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs[callIndex];
    callIndex += 1;
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

describe('기능 통합 테스트', () => {
  let gameController;

  beforeEach(() => {
    gameController = new GameController();
  });

  const TEST_CASES = [
    [
      'pobi,woni,dany',
      '5',
      [1, 2, 7, 3, 4, 4, 0, 4, 9, 6, 8, 5],
      [
        '실행 결과',
        'pobi : ',
        'woni : ',
        'dany : -',
        '',
        'pobi : ',
        'woni : -',
        'dany : --',
        '',
        'pobi : ',
        'woni : --',
        'dany : ---',
        '',
        'pobi : -',
        'woni : ---',
        'dany : ----',
        '',
        '최종 우승자 : dany',
      ],
    ],
    [
      '123,15,1',
      '2',
      [4, 4, 4, 4, 4, 4],
      [
        '실행 결과',
        '123 : -',
        '15 : -',
        '1 : -',
        '',
        '123 : --',
        '15 : --',
        '1 : --',
        '',
        '최종 우승자 : 123, 1',
      ],
    ],
    [
      'jun,123,----',
      '3',
      [9, 0, 4, 7, 2, 8, 5, 6, 3],
      [
        '실행 결과',
        'jun : -',
        '123 : ',
        '---- : -',
        '',
        'jun : --',
        '123 : ',
        '---- : --',
        '',
        'jun : ---',
        '123 : -',
        '---- : --',
        '',
        '최종 우승자 : jun',
      ],
    ],
    [
      'dong,gyun,FEdev',
      '3',
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [
        '실행 결과',
        'dong : ',
        'gyun : ',
        'FEdev : ',
        '',
        'dong : ',
        'gyun : ',
        'FEdev : ',
        '',
        'dong : ',
        'gyun : ',
        'FEdev : ',
        '',
        '최종 우승자 : dong, gyun, FEdev',
      ],
    ],
  ];

  test.each(TEST_CASES)('통합 기능 테스트', async (carNames, tryNumber, randomNumbers, logs) => {
    mockQuestions([carNames, tryNumber]);
    mockRandoms(randomNumbers);
    const logSpy = getLogSpy();

    await gameController.play();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
