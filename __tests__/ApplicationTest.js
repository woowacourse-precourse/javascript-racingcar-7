import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import ERROR_MESSAGES from '../src/constants/ErrorMessage.js';

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
});

describe('자동차 이름 에러 테스트', () => {
  test('자동차 이름 6자 이상 에러 테스트', async () => {
    const inputs = ['abcdef'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.CAR_NAME_TOO_LONG);
  });

  test('자동차 이름 0자 에러 테스트', async () => {
    const inputs = [''];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.CAR_NAME_EMPTY);
  });

  test('자동차 이름 중복 테스트', async () => {
    const inputs = ['same,same'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.CAR_NAME_DUPLICATED);
  });
});

describe('시도할 횟수 에러 테스트', () => {
  test('시도할 횟수가 숫자가 아닐 때 테스트', async () => {
    const inputs = ['a,b', 'a'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.ATTEMPT_NOT_NUMBER);
  });

  test('사도할 횟수가 0일 때 테스트', async () => {
    const inputs = ['a,b', '0'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      ERROR_MESSAGES.ATTEMPT_NOT_POSITIVE
    );
  });

  test('사도할 횟수가 음수일 때 테스트', async () => {
    const inputs = ['a,b', '-1'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      ERROR_MESSAGES.ATTEMPT_NOT_POSITIVE
    );
  });
});
