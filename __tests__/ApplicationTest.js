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

  test('예외 테스트', async () => {
    // given
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트: 자동차 이름 입력 안 함', async () => {
    const inputs = ['', '1'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERRORS.EMPTY_CAR_NAME);
  });

  test('예외 테스트: 자동차 이름 허용 길이 초과', async () => {
    const inputs = ['pobi, woni, youngju', '1'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERRORS.INVALID_CAR_NAME);
  });

  test('예외 테스트: 동일한 자동차 이름 입력', async () => {
    const inputs = ['pobi, woni, woni', '1'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERRORS.DUPLICATE_CAR_NAME);
  });

  test('예외 테스트: 잘못된 시도 횟수', async () => {
    const inputs = ['pobi, woni', 'a'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERRORS.INVALID_TRIAL_COUNT);
  });
});
