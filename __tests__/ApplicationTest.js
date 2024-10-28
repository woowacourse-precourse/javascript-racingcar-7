import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/constants.js';

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
  test('기능 테스트1', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('기능 테스트2', async () => {
    const MOVING_FORWARD_1 = 7;
    const STOP_1 = 2;
    const MOVING_FORWARD_2 = 9;
    const STOP_2 = 0;
    const inputs = ['won, young', '2'];
    const logs = ['won : ', 'young : --', '최종 우승자 : young'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([STOP_1, MOVING_FORWARD_1, STOP_2, MOVING_FORWARD_2]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('기능 테스트3', async () => {
    const MOVING_FORWARD = 7;
    const STOP = 1;
    const inputs = ['jo, won, young', '1'];
    const logs = ['jo : ', 'won : -', 'young : -', '최종 우승자 : won, young'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([STOP, MOVING_FORWARD, MOVING_FORWARD]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('예외 테스트 - 이름의 길이가 5자를 초과', async () => {
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.INVALID_NAME_LENGTH);
  });

  test('예외 테스트 - 이름이 입력되지 않은 경우', async () => {
    const inputs = [''];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.INVALID_NAME_NULL);
  });

  test('예외 테스트 - 이름이 전체가 입력되지 않은 경우', async () => {
    const inputs = ['pobi,,'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.INVALID_NAME_NULL);
  });

  test('예외 테스트 - 이름에 특수문자가 포함된 경우', async () => {
    const inputs = ['pobi,ja#i'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      ERROR_MESSAGE.INVALID_NAME_SPECIAL_CHARACTER
    );
  });

  test('예외 테스트 - 중복된 이름이 있는 경우', async () => {
    const inputs = ['pobi,pobi'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.DUPLICATE_CAR_NAME);
  });

  test('예외 테스트 - 시도 횟수가 양의 정수가 아닌 경우', async () => {
    const inputs = ['pobi,woni', '0'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.INVALID_COUNT);
  });

  test('예외 테스트 - 시도 횟수가 숫자가 아닌 경우', async () => {
    const inputs = ['pobi,woni', 'a'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.INVALID_COUNT);
  });

  test('예외 테스트 - 시도 횟수가 음수인 경우', async () => {
    const inputs = ['pobi,woni', '-1'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.INVALID_COUNT);
  });

  test('예외 테스트 - 시도 횟수가 소수인 경우', async () => {
    const inputs = ['pobi,woni', '1.5'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.INVALID_COUNT);
  });
});
