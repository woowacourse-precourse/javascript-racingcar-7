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

const MOVING_FORWARD = 4;
const STOP = 3;

const runRaceTest = async (inputs, randomNumbers, expectedLogs) => {
  // given
  const logSpy = getLogSpy();
  mockQuestions(inputs);
  mockRandoms(randomNumbers);

  // when
  const app = new App();
  await app.run();

  // then
  expectedLogs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(log);
  });
}

describe('자동차 경주', () => {
  test('기능 테스트: pobi 우승', async () => {
    await runRaceTest(
      ['pobi,woni', '1'],
      [MOVING_FORWARD, STOP],
      ['pobi : -', 'woni : ', '최종 우승자 : pobi'],
    );
  });

  test('기능 테스트: 동점 승', async () => {
    await runRaceTest(
      ['pobi,woni', '2'],
      [MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD],
      ['pobi : --', 'woni : --', '최종 우승자 : pobi, woni'],
    );
  });

  test('기능 테스트: woni 우승', async () => {
    await runRaceTest(
      ['pobi,woni', '2'],
      [MOVING_FORWARD, MOVING_FORWARD, STOP, MOVING_FORWARD],
      ['pobi : -', 'woni : --', '최종 우승자 : woni'],
    );
  });

  test('기능 테스트: pobi, jun 우승 (과제 입출력 예제)', async () => {
    await runRaceTest(
      ['pobi,woni,jun', '5'],
      [
        MOVING_FORWARD, STOP, MOVING_FORWARD,
        MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD,
        MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD,
        MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD,
        MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD
      ],
      ['pobi : -----', 'woni : ----', 'jun : -----', '최종 우승자 : pobi, jun'],
    );
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
