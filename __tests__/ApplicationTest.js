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
  test('기능 테스트 : 자동차 1개일 때', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi', '1'];
    const logs = ['pobi : -', '최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('예외 테스트 : 자동차 이름의 형식이 올바르지 않은 경우', async () => {
    const inputs = ['pobi##,javaji'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
  test('예외 테스트 : 자동차 이름의 형식이 올바르지 않은 경우2', async () => {
    const inputs = ['😎,java'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
  test('예외 테스트 : 이름 5자 이상', async () => {
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트: 빈 자동차 이름 입력 시', async () => {
    const inputs = [''];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트: 빈 자동차 이름 입력 시2', async () => {
    const inputs = [',pobi,woni'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트: 빈 자동차 이름 입력 시3', async () => {
    const inputs = ['pobi,woni,'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트: 시도 횟수가 0 이하일 경우', async () => {
    const inputs = ['pobi,woni', '0'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트: 자동차 이름 중복 입력 시', async () => {
    const inputs = ['pobi,pobi'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트: 숫자가 아닌 것을 시도 횟수로 입력할 경우', async () => {
    const inputs = ['pobi,woni', 'abc'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
  test('예외 테스트: 양수 아닌 수를 시도 횟수로 입력할 경우', async () => {
    const inputs = ['pobi,woni', '2.5'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
  test('예외 테스트: 양수 아닌 수를 시도 횟수로 입력할 경우2', async () => {
    const inputs = ['pobi,woni', '-3'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
