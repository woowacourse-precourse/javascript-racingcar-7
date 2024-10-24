import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = numbers => {
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
    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('자동차 이름이 5글자보다 긴 경우', async () => {
    // given
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 수가 2개 미만인 경우', async () => {
    // given
    const inputs = ['java'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('구분자 사이에 값이 없는 경우', async () => {
    // given
    const inputs = ['pobi,,javi'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름으로 문자열이 아닌 값이 들어온 경우', async () => {
    // given
    const inputs = ['pobi,a%$ji'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('시도할 횟수가 1회 미만인 경우', async () => {
    // given
    const inputs = ['pobi,java', '0'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('시도할 횟수가 숫자가 아닌 경우', async () => {
    // given
    const inputs = ['pobi,jav', 'abc'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
