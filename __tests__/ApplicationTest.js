import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import ERRORS from '../src/datas/error.js';

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

  describe('예외 테스트', () => {
    const errorCases = [
      {
        name: '기능 실행 중 에러 발생',
        inputs: ['pobi,javaji'],
        errorName: '[ERROR]',
      },
      {
        name: '자동차 이름 입력 안 함',
        inputs: ['', '1'],
        errorName: ERRORS.EMPTY_CAR_NAME,
      },
      {
        name: '자동차 이름 허용 길이 초과',
        inputs: ['pobi, woni, youngju', '1'],
        errorName: ERRORS.INVALID_CAR_NAME,
      },
      {
        name: '동일한 자동차 이름 입력',
        inputs: ['pobi, woni, woni', '1'],
        errorName: ERRORS.DUPLICATE_CAR_NAME,
      },
      {
        name: '잘못된 시도 횟수',
        inputs: ['pobi, woni', 'a'],
        errorName: ERRORS.INVALID_TRIAL_COUNT,
      },
    ];

    test.each(errorCases)('$name', async ({ inputs, errorName }) => {
      mockQuestions(inputs);
      const app = new App();

      await expect(app.run()).rejects.toThrow(errorName);
    });
  });
});
