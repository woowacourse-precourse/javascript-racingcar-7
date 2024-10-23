import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import { ERROR_MESSAGE } from '../src/constant/index.js';
import Car from '../src/Car.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => Promise.resolve(inputs));
};

describe('자동차 입력 테스트', () => {
  let app;
  beforeEach(() => {
    app = new App();
  });

  const TEST_CASES_SUCCESS = [
    ['pobi,woni,jun', ['pobi', 'woni', 'jun']],
    ['1,2,3,4', ['1', '2', '3', '4']],
  ];
  test.each(TEST_CASES_SUCCESS)('자동차 입력 성공', async (input, answer) => {
    mockQuestions(input);

    const cars = await app.setCars();
    expect(cars).toStrictEqual(answer);
  });

  const TEST_CASES_FAILED = [
    ['', ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_EMPTY],
    [' ', ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_GAP],
    ['123,1 5,1', ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_GAP],
    ['dany,dany', ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_DUPLICATION],
    ['daniel,java,js', ERROR_MESSAGE.CAR_NAME_MAX_LENGTH_FIVE],
    ['jun,123456', ERROR_MESSAGE.CAR_NAME_MAX_LENGTH_FIVE],
  ];
  test.each(TEST_CASES_FAILED)('자동차 입력 실패', async (input, message) => {
    mockQuestions(input);

    await expect(app.setCars()).rejects.toThrow(message);
  });
});

describe('이동 할 횟수 입력 테스트', () => {
  let app;
  beforeEach(() => {
    app = new App();
  });

  const TEST_CASES_FAILED = [
    ['0', ERROR_MESSAGE.TRY_NUMBER_RANGE_ERROR],
    ['-1', ERROR_MESSAGE.TRY_NUMBER_RANGE_ERROR],
    ['123-121', ERROR_MESSAGE.TRY_NUMBER_TYPE_ERROR],
    ['-10+100', ERROR_MESSAGE.TRY_NUMBER_TYPE_ERROR],
  ];
  test.each(TEST_CASES_FAILED)('횟수 입력 실패', async (input, message) => {
    mockQuestions(input);
    await expect(app.setTryNumber()).rejects.toThrow(message);
  });
});

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

describe('게임 시작 테스트', () => {
  const [carNameArr, tryNumber, randomNumbers, answer] = [
    [new Car('pobi'), new Car('lisa'), new Car('jun')],
    4,
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
  ];

  test('매 시행마다 각 자동차들의 상태 출력 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms(randomNumbers);

    const app = new App();
    app.gameStart(carNameArr, tryNumber);

    answer.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
