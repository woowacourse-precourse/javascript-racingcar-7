import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const MOVING_FORWARD = 4;
const STOP = 3;

const mockQuestionsAndRandoms = (inputs, randoms) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() =>
    Promise.resolve(inputs.shift())
  );

  MissionUtils.Random.pickNumberInRange = jest.fn();
  randoms.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주 기능 테스트', () => {
  const testRaceWithLogs = async (inputs, randoms, expectedLogs) => {
    const logSpy = getLogSpy();
    mockQuestionsAndRandoms(inputs, randoms);

    const app = new App();
    await app.run();

    expectedLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  };

  test('정상적인 이동 및 우승자 단수 출력 테스트', async () => {
    await testRaceWithLogs(
      ['pobi,woni,jun', '1'],
      [MOVING_FORWARD, STOP, STOP],
      ['pobi : -', 'woni : ', 'jun : ', '최종 우승자 : pobi']
    );
  });

  test('정상적인 이동 및 우승자 복수 출력 테스트', async () => {
    await testRaceWithLogs(
      ['pobi,woni,jun', '5'],
      [
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
      ],
      [
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
      ]
    );
  });
});

describe('입력 예외 테스트', () => {
  const testInvalidInput = async (inputs) => {
    mockQuestionsAndRandoms(inputs, []);
    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  };

  test('6자 이상 이름 입력 시 오류', async () => {
    await testInvalidInput(['pobi,javaji']);
  });

  test('숫자와 영어 외 문자 입력 시 오류', async () => {
    await testInvalidInput(['pobi,*']);
  });

  test('공백 이름 입력 시 오류', async () => {
    await testInvalidInput(['pobi, ']);
  });

  test('중복된 자동차 이름 입력 시 오류', async () => {
    await testInvalidInput(['pobi,pobi']);
  });

  test('자동차 이름이 하나만 입력됐을 때 오류', async () => {
    await testInvalidInput(['pobi']);
  });

  test('음수 차수 입력 시 오류', async () => {
    await testInvalidInput(['pobi,james', '-3']);
  });

  test('0 또는 공백 입력 시 오류', async () => {
    await testInvalidInput(['pobi,james', '0']);
  });

  test('숫자 외 문자를 차수에 입력 시 오류', async () => {
    await testInvalidInput(['pobi,james', 'abc']);
  });
});
