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

describe('기능 테스트', () => {
  test('단독 우승자', async () => {
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

  test('공동 우승자', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni,jun', '1'];
    const logs = ['pobi : -', 'woni : -', 'jun : ', '최종 우승자 : pobi, woni'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, MOVING_FORWARD, STOP]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

const exceptionTestTemplate = (string, input) => {
  test(string, async () => {
    const inputs = input;
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
};

describe('예외 테스트', () => {
  exceptionTestTemplate('자동차 이름 5글자 이상', ['pobi,javaji']);
  exceptionTestTemplate('자동차 이름이 쉼표로 시작', [',pobi,woni']);
  exceptionTestTemplate('자동차 이름이 쉼표로 끝', ['pobi,woni,']);
  exceptionTestTemplate('자동차 이름에 연속된 쉼표', ['pobi,,woni']);
  exceptionTestTemplate('자동차 한 대 입력', ['pobi']);
  exceptionTestTemplate('자동차 이름 입력 없음', ['']);
  exceptionTestTemplate('자동차 이름 중복', ['pobi,pobi']);
  exceptionTestTemplate('시도 횟수 입력 없음', ['pobi,woni', '']);
  exceptionTestTemplate('시도 횟수 문자 입력', ['pobi,woni', 'jun']);
  exceptionTestTemplate('시도 횟수 특수문자 입력', ['pobi,woni', '*']);
});
