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

const testHappyPathTemplate = async (inputs, randomStates, logs) => {
  const logSpy = getLogSpy();

  mockQuestions(inputs);
  mockRandoms(randomStates);

  const app = new App();
  await app.run();

  logs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
};

const testExeptionTamplate = (query, inputs) => {
  test(query, async () => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
};

describe('자동차 경주 게임 테스트', () => {
  describe('자동차 경주', () => {
    const GO = 4;
    const STOP = 3;

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('기능 테스트', async () => {
      const inputs = ['pobi,woni', '1'];
      const randomStates = [GO, STOP];
      const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];

      testHappyPathTemplate(inputs, randomStates, logs);
    });

    test('복수 우승자 테스트', async () => {
      const inputs = ['pobi,woni', '1'];
      const randomStates = [GO, GO];
      const logs = ['pobi : -', 'woni : -', '최종 우승자 : pobi, woni'];

      testHappyPathTemplate(inputs, randomStates, logs);
    });
  });

  describe('예외 테스트', () => {
    testExeptionTamplate('이름 없음 예외', ['']);
    testExeptionTamplate('빈 이름 예외', ['pobi,,wone']);
    testExeptionTamplate('한 명 예외', ['pobi']);
    testExeptionTamplate('5자 초과 이름 예외', ['pobidia,woni']);
    testExeptionTamplate('이름 중복 예외', ['pobi,pobi,woni']);
    testExeptionTamplate('0회 시도 예외', ['pobi,woni', 0]);
    testExeptionTamplate('미입력 시도 예외', ['pobi,woni', '']);
    testExeptionTamplate('최대 시도 횟수 초과 예외', ['pobi,woni', 1234567890123456]);
    testExeptionTamplate('문자 시도 입력 예외', ['pobi,woni', 'x']);
    testExeptionTamplate('소수 시도 입력 예외', ['pobi,woni', '3.5']);
    testExeptionTamplate('수식 시도 입력 예외', ['pobi,woni', '3+3']);
    testExeptionTamplate('공백 시도 입력 예외', ['pobi,woni', ' ']);
    testExeptionTamplate('빈 문자열 시도 입력 예외', ['pobi,woni', '']);
  });
});
