import App from '../src/App.js';
import RacingCar from '../src/racingCar.js';
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

    RacingCar.instance = null;
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

describe('커스텀 기능 테스트', () => {
  test('우승자 1명', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['Jae1,Jae2', '1'];
    const logs = ['Jae1 : -', 'Jae2 : ', '최종 우승자 : Jae1'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });

    RacingCar.instance = null;
  });

  test('우승자 n명', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['Jae1,Jae2,Jae3', '1'];
    const logs = ['Jae1 : -', 'Jae2 : -', 'Jae3 : ', '최종 우승자 : Jae1, Jae2'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, MOVING_FORWARD, STOP]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });

    RacingCar.instance = null;
  });
});

describe('커스텀 예외 테스트', () => {
  test('자동차 대수(0대)', async () => {
    const inputs = [''];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 대수(1대)', async () => {
    const inputs = ['Jae'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 중복', async () => {
    const inputs = ['Jae,Jae'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 길이', async () => {
    const inputs = ['JaeJae,Jae'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 특수문자', async () => {
    const inputs = ['Jae,Jae_'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 공백', async () => {
    const inputs = ['Jae,J ae'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('횟수 문자', async () => {
    const inputs = ['Jae1,Jae2', 'A'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('횟수 음수', async () => {
    const inputs = ['Jae1,Jae2', '-1'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('횟수 0', async () => {
    const inputs = ['Jae1,Jae2', '0'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('횟수 소수', async () => {
    const inputs = ['Jae1,Jae2', '2.5'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
