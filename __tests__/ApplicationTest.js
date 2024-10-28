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

  test('기능 테스트 - 우승자는 한 명 이상일 수 있다.', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni,jerry', '1'];
    const logs = ['pobi : -', 'woni : ', 'jerry : -', '최종 우승자 : pobi, jerry'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP, MOVING_FORWARD]);

    const app = new App();
    await app.run();

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

  test('예외 테스트 - 자동차 이름은 필수값이다.', async () => {
    const inputs = ['', '3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트 - 경주에 참여하는 자동차는 1대 이상이어야 한다.', async () => {
    const inputs = ['pobi', '3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트 - 자동차 이름에는 공백을 포함할 수 없다.', async () => {
    const inputs = ['pobi, ,woni', '3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트 - 자동차 이름은 5글자를 초과할 수 없다.', async () => {
    const inputs = ['pobi,javaji', '3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트 - 자동차 이름은 중복될 수 없다.', async () => {
    const inputs = ['pobi,pobi', '3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트 - 경주 실행 횟수는 최소 1회 이상이다.', async () => {
    const inputs = ['pobi,woni', '0'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트 - 경주 실행 횟수는 빈 값을 허용하지 않는다.', async () => {
    const inputs = ['pobi,woni', ''];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트 - 경주 실행 횟수는 최대 100회이다.', async () => {
    const inputs = ['pobi,woni', '300'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트 - 경주 실행 횟수에 문자열은 입력할 수 없다.', async () => {
    const inputs = ['pobi,woni', 'a'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트 - 경주 실행 횟수에 소수점은 입력할 수 없다.', async () => {
    const inputs = ['pobi,woni', '2.5'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
