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
    logs.forEach(log => {
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

  // 커스텀 테스트
  test('예외 테스트 - 게임 횟수 0 입력', async () => {
    // given
    const inputs = ['pobi,good', '0'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트 - 경기 횟수 문자 입력', async () => {
    // given
    const inputs = ['pobi,good', 'abc'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트 - 경기 횟수 음수 입력', async () => {
    // given
    const inputs = ['pobi,good', '-2'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트 - 자동차 이름 중복', async () => {
    // given
    const inputs = ['pobi,pobi', '3'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트 - 자동차 이름에 공백 포함', async () => {
    // given
    const inputs = ['pobi, woni', '3'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트 - 자동차 이름이 빈 문자열', async () => {
    // given
    const inputs = ['pobi,', '3'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('입출력 테스트 - 정상 경기 진행', async () => {
    // given
    const inputs = ['pobi,woni', '3'];
    const logs = ['pobi : -', 'woni : ', 'pobi : --', 'woni : -', 'pobi : ---', 'woni : -', '최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([4, 3, 4, 4, 4, 3]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('입출력 테스트 - 우승자 확인', async () => {
    // given
    const inputs = ['pobi,woni', '2'];
    const logs = ['최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([4, 3, 4, 3]); // pobi가 우승

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('입출력 테스트 - 복수 우승자 확인', async () => {
    // given
    const inputs = ['pobi,woni', '3'];
    const logs = ['최종 우승자 : pobi, woni'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([4, 4, 4, 4, 4, 4]); // pobi와 woni 동일 거리 이동

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('입출력 테스트 - 경기 시작 시 초기 상태', async () => {
    // given
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : ', 'woni : '];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([3, 3]); // 모든 자동차 정지

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
