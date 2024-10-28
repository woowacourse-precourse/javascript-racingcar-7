import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const MOVING_FORWARD = 4;
const STOP = 3;

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

describe('자동차 경주 기능 테스트', () => {
  test('정상적인 이동 및 우승자 단수 출력 테스트', async () => {
    const inputs = ['pobi,woni,jun', '1'];
    const logs = ['pobi : -', 'woni : ', 'jun : '];
    const logSpy = getLogSpy();
    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP, STOP]);

    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

    // given
    const inputs = ['pobi,woni,jun', '5'];
    const logs = [
      'pobi : -',
      'woni : ',
      'jun : -',
      'pobi : --',
      'woni : -',
      'jun : --',
      'pobi : ---',
      'woni : --',
      'jun : ---',
      'pobi : ----',
      'woni : ---',
      'jun : ----',
      'pobi : -----',
      'woni : ----',
      'jun : -----',
      '최종 우승자 : pobi, jun',
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    // 예제의 요구에 맞춰 각 라운드에서 전진하거나 멈추는 값을 설정
    mockRandoms([
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
    ]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
