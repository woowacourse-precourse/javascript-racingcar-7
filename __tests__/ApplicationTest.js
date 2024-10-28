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

  test('자동차 이름 길이 예외 테스트', async () => {
    // given
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 빈 문자열 예외 테스트', async () => {
    mockQuestions(['', '1']);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('시도할 횟수 빈 문자열 예외 테스트', async () => {
    mockQuestions(['pobi,woni', '']);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름에 잘못된 문자 포함 예외테스트', async () => {
    mockQuestions(['pobi,woni@#', '1']);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 중복 예외 테스트', async () => {
    mockQuestions(['pobi,pobi', '1']);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('시도할 횟수 숫자가 아닐 경우 예외 테스트', async () => {
    mockQuestions(['pobi,woni', 'abc']);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('시도할 횟수 음수 예외테스트', async () => {
    mockQuestions(['pobi,woni', '-1']);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
