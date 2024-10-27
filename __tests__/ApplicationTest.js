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

describe('자동차 경주 게임 테스트', () => {
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

  test('자동차 이름 입력 및 유효성 검사 - 정상 입력', async () => {
    // given
    const inputs = ['pobi,woni,jun'];
    mockQuestions(inputs);

    // when
    const app = new App();
    const carNames = await app.getCarNames();

    // then
    expect(carNames).toEqual(['pobi', 'woni', 'jun']);
  });

  test('자동차 이름 입력 및 유효성 검사 - 이름 길이 초과', async () => {
    // given
    const inputs = ['pobi,woni,junwoo'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.getCarNames()).rejects.toThrow(
      '[ERROR] 자동차 이름은 5자 이하만 가능합니다.',
    );
  });

  test('자동차 이름 입력 및 유효성 검사 - 빈 문자열 포함', async () => {
    // given
    const inputs = ['pobi,,jun'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.getCarNames()).rejects.toThrow(
      '[ERROR] 자동차 이름은 빈 문자열일 수 없습니다.',
    );
  });

  test('자동차 이름 입력 및 유효성 검사 - 중복 이름', async () => {
    // given
    const inputs = ['pobi,woni,pobi'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.getCarNames()).rejects.toThrow(
      '[ERROR] 자동차 이름은 중복될 수 없습니다.',
    );
  });

  test('시도 횟수 입력 및 유효성 검사 - 정상 입력', async () => {
    // given
    const inputs = ['5'];
    mockQuestions(inputs);

    // when
    const app = new App();
    const tryCount = await app.getTryCount();

    // then
    expect(tryCount).toBe(5);
  });

  test('시도 횟수 입력 및 유효성 검사 - 0 이하의 수 입력', async () => {
    // given
    const inputs = ['0'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.getTryCount()).rejects.toThrow(
      '[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.',
    );
  });

  test('시도 횟수 입력 및 유효성 검사 - 숫자가 아닌 입력', async () => {
    // given
    const inputs = ['abc'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.getTryCount()).rejects.toThrow(
      '[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.',
    );
  });
});
