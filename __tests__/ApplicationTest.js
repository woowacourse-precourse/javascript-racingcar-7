import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

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

describe('자동차 경주', () => {
  test('기능 테스트', async () => {
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

  test('예외 테스트: 잘못된 자동차 이름', async () => {
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트: 자동차 이름이 빈 문자열일 때', async () => {
    const inputs = ['pobi,,woni'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR] 자동차 이름은 빈 문자열일 수 없습니다.');
  });

  test('예외 테스트: 중복된 자동차 이름일 때', async () => {
    const inputs = ['pobi,woni,pobi'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR] 자동차 이름은 중복될 수 없습니다.');
  });

  test('예외 테스트: 시도 횟수가 0일 때', async () => {
    const inputs = ['pobi,woni', '0'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.');
  });

  test('예외 테스트: 시도 횟수가 음수일 때', async () => {
    const inputs = ['pobi,woni', '-3'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.');
  });

  test('예외 테스트', async () => {
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
