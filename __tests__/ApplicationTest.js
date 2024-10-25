import { MissionUtils } from '@woowacourse/mission-utils';
import { getUserInput } from '../src/views/View.js';
import { divisionCarName } from '../src/models/Model.js';
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

// ------커스텀 테스트-----
describe('view', () => {
  test('사용자가 이름을 입력하면', async () => {
    const consoleSpy = jest
      .spyOn(MissionUtils.Console, 'readLineAsync')
      .mockImplementation(() => Promise.resolve('happy,sad'));

    // 비동기 입력값을 받아올 때까지 기다림
    const input = await getUserInput();
    expect(input).toBe('happy,sad');

    consoleSpy.mockRestore();
  });
  test('사용자가 입력한 차 이름 ,로 구분', async () => {
    const inputs = 'happy,car';
    const car = divisionCarName(inputs);
    expect(car).toEqual(['happy', 'car']);
  });
});
