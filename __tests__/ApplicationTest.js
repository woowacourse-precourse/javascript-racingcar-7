import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = numbers => {
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

describe('자동차 경주 테스트', () => {
  test('기본 진행 테스트', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    const app = new App();
    await app.run();

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('공동 우승 테스트', async () => {
    const inputs = ['car1,car2', '1'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([4, 4]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('car1 : -'));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('car2 : -'));
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('최종 우승자 : car1,car2'),
    );
  });
  test('3라운드 진행 테스트', async () => {
    // given
    const inputs = ['car1,car2', '3'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    // car1: 전진(4) -> 정지(3) -> 전진(4) = 총 2칸 전진
    // car2: 정지(3) -> 전진(4) -> 정지(3) = 총 1칸 전진
    mockRandoms([4, 3, 3, 4, 4, 3]);

    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('car1 : --'));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('car2 : -'));
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('최종 우승자 : car1'),
    );
  });
});
describe('입력값 예외 테스트', () => {
  test('자동차 이름이 너무 긴 경우', async () => {
    const inputs = ['pobi,toolongname'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차가 한 대만 입력된 경우', async () => {
    const inputs = ['pobi'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('시도 횟수가 음수인 경우', async () => {
    const inputs = ['pobi,woni', '-1'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
