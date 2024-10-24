import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/constant/index.js';
import GameController from '../src/GameController.js';

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

describe('초기 입력 테스트', () => {
  let gameController;

  beforeEach(() => {
    gameController = new GameController();
  });

  const CAR_NAME_TEST_CASES = [
    ['', '10', ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_EMPTY],
    [' ', '10', ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_GAP],
    ['123,1 5,1', '10', ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_GAP],
    ['dany,dany', '10', ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_DUPLICATION],
    ['daniel,java,js', '10', ERROR_MESSAGE.CAR_NAME_MAX_LENGTH_FIVE],
    ['jun,123456', '10', ERROR_MESSAGE.CAR_NAME_MAX_LENGTH_FIVE],
  ];

  test.each(CAR_NAME_TEST_CASES)('자동차 입력 실패 테스트', async (cars, tryNumber, message) => {
    mockQuestions([cars, tryNumber]);

    await expect(gameController.init()).rejects.toThrow(message);
  });

  const TRY_NUMBER_TEST_CASES = [
    ['dany', '0', ERROR_MESSAGE.TRY_NUMBER_RANGE_ERROR],
    ['dany', '-1', ERROR_MESSAGE.TRY_NUMBER_RANGE_ERROR],
    ['dany', '12-1', ERROR_MESSAGE.TRY_NUMBER_TYPE_ERROR],
    ['dany', '-5+6', ERROR_MESSAGE.TRY_NUMBER_TYPE_ERROR],
  ];

  test.each(TRY_NUMBER_TEST_CASES)(
    '이동 할 횟수 입력 실패 테스트',
    async (cars, tryNumber, message) => {
      mockQuestions([cars, tryNumber]);

      await expect(gameController.init()).rejects.toThrow(message);
    },
  );
});

describe('게임 실행 기능 테스트', () => {
  const TEST_CASES = [
    [
      'pobi,lisa,jun',
      '4',
      [1, 2, 7, 3, 4, 4, 0, 4, 9, 6, 8, 5],
      [
        '실행 결과',
        'pobi : ',
        'lisa : ',
        'jun : -',
        '',
        'pobi : ',
        'lisa : -',
        'jun : --',
        '',
        'pobi : ',
        'lisa : --',
        'jun : ---',
        '',
        'pobi : -',
        'lisa : ---',
        'jun : ----',
      ],
    ],
    [
      'dong,gyun,dany',
      '4',
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [
        '실행 결과',
        'dong : ',
        'gyun : ',
        'dany : ',
        '',
        'dong : ',
        'gyun : ',
        'dany : ',
        '',
        'dong : ',
        'gyun : ',
        'dany : ',
        '',
        'dong : ',
        'gyun : ',
        'dany : ',
      ],
    ],
  ];

  let gameController;

  beforeEach(() => {
    gameController = new GameController();
  });

  test.each(TEST_CASES)(
    '매 시행마다 각 자동차들의 상태 출력 테스트',
    async (cars, tryNumber, randomNumbers, answer) => {
      const logSpy = getLogSpy();

      mockQuestions([cars, tryNumber]);
      mockRandoms(randomNumbers);

      await gameController.init();
      gameController.execute();

      answer.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    },
  );
});
