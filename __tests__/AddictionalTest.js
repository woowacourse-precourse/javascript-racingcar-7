import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

// Mocking utility for inputs
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

// Mocking utility for random number generator
const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

// Utility for capturing console logs
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주 추가 테스트', () => {
  test('우승자가 여러 명일 때 테스트', async () => {
    // given
    const MOVING_FORWARD = 8;
    const inputs = ['pobi,woni,honux', '3'];
    const logs = [
      'pobi : -',
      'woni : -',
      'honux : -',
      'pobi : --',
      'woni : --',
      'honux : --',
      'pobi : ---',
      'woni : ---',
      'honux : ---',
      '최종 우승자 : pobi, woni, honux',
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD, // 1st round
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD, // 2nd round
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD, // 3rd round
    ]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });

    // 추가: 로그 확인
  });

  test('이름이 공백일 경우 예외 처리 테스트', async () => {
    // given
    const inputs = ['pobi, ,woni'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR] 잘못된 이름 입력입니다.');
  });

  test('시도 횟수가 0일 때 예외 처리 테스트', async () => {
    // given
    const inputs = ['pobi,woni,honux', '0'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      '[ERROR] 시도 횟수는 1 이상이어야 합니다.',
    );
  });
});
