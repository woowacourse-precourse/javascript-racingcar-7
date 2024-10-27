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
  test('자동차 우승자 1명인 기능 테스트', async () => {
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

  test('자동차 우승자 2명 이상인 기능 테스트', async () => {
    // given
    const MOVING_FORWARD = 4;
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : -', 'woni : -', '최종 우승자 : pobi, woni'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, MOVING_FORWARD]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test.each([
    { inputs: ['pobi,tenenger'], description: '5자 초과된 자동차 이름' },
    { inputs: ['pobi,tenen '], description: '공백 포함 5자 초과된 자동차 이름' },
    { inputs: ['pobi,tenen', '+1'], description: '시도 횟수에 숫자가 아닌 + 기호가 포함된 양수일 때' },
    { inputs: ['pobi,tenen', '-1'], description: '시도 횟수에 숫자가 아닌 음수일 때' },
    { inputs: ['pobi,tenen', ''], description: '시도 횟수에 숫자가 아닌 빈 문자열일 때' },
    { inputs: ['pobi,tenen', 'abc'], description: '시도 횟수에 숫자가 아닌 문자열일 때' },
  ])('$description 예외 테스트', async ({ inputs }) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
