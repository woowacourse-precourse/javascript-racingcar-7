import { MissionUtils } from '@woowacourse/mission-utils';
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

  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
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

describe('전체 앱 테스트', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = getLogSpy();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  test('자동차 경주 기본 기능 테스트 - 두 대의 자동차가 공동 우승', async () => {
    const inputs = ['car1,car2,car3', '2'];
    const expectedLogs = ['\n', '실행 결과', 'car1 : -', 'car2 : -', 'car3 : ', '\n', 'car1 : --', 'car2 : --', 'car3 : ', '\n', '최종 우승자 : car1, car2'];

    mockQuestions(inputs);
    mockRandoms([4, 4, 3, 4, 4, 3]); // car1과 car2는 두 번 전진, car3는 전진하지 않음

    const app = new App();
    await app.run();

    expectedLogs.forEach((log, index) => {
      expect(logSpy).toHaveBeenNthCalledWith(index + 1, expect.stringContaining(log));
    });
  });

  test('빈 입력 값에 대한 예외 처리', async () => {
    const inputs = ['', '3'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR] 자동차 이름에 빈 값이 포함되어 있습니다.');
  });

  test('자동차 이름 중복에 대한 예외 처리', async () => {
    const inputs = ['car1,car1', '3'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR] 자동차 이름이 중복되었습니다.');
  });

  test('잘못된 시도 횟수에 대한 예외 처리 (음수)', async () => {
    const inputs = ['car1,car2', '-1'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR] 0보다 큰 수를 입력해주세요');
  });

  test('잘못된 시도 횟수에 대한 예외 처리 (숫자가 아닌 입력)', async () => {
    const inputs = ['car1,car2', 'abc'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR] 유효한 숫자를 입력해주세요');
  });
});
