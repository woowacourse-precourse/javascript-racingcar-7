import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import getCarNames from '../src/utils/getCarNames.js';
import getRoundCount from '../src/utils/getRoundCount.js';
import executeRaceRounds from '../src/controllers/executeRaceRounds.js';
import OutputView from '../src/views/OutputView.js';
import RacingCar from '../src/models/RacingCar.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
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

describe('주요 기능', () => {
  beforeEach(() => {
    jest.spyOn(OutputView, 'printStart').mockImplementation();
    jest.spyOn(OutputView, 'printRoundResult').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('자동차 이름 입력 기능', async () => {
    const inputs = ['pobi,woni,jun'];
    const expectedCarNames = ['pobi', 'woni', 'jun'];
    mockQuestions(inputs);

    const carNames = await getCarNames();
    expect(carNames).toEqual(expectedCarNames);
  });

  test('시도할 횟수 입력 기능', async () => {
    const inputs = ['3'];
    const expectedRoundCount = 3;
    mockQuestions(inputs);

    const round = await getRoundCount();
    expect(round).toBe(expectedRoundCount);
  });

  test('자동차 전진 결정', () => {
    const car = new RacingCar('pobi');
    car.advance = 0;
    mockRandoms([4]);

    // when
    car.move();

    // then
    expect(car.advance).toBe(1);
  });

  test('자동차 정지 결정', () => {
    const car = new RacingCar('woni');
    car.advance = 0;
    mockRandoms([3]);

    car.move();

    expect(car.advance).toBe(0);
  });

  test('라운드 결과 출력', () => {
    const inputs = ['pobi,woni', '2'];
    const expectedLog = ['pobi : -', 'woni : ', 'pobi : --', 'woni : -'];

    mockQuestions(inputs);
    mockRandoms([4, 3, 4, 4]);

    const mockRace = {
      getRounds: jest.fn().mockReturnValue(2),
      getCars: jest
        .fn()
        .mockReturnValueOnce([
          { name: 'pobi', advance: 1 },
          { name: 'woni', advance: 0 },
        ])
        .mockReturnValueOnce([
          { name: 'pobi', advance: 2 },
          { name: 'woni', advance: 1 },
        ]),
      runRound: jest.fn().mockImplementation(() => {
        mockRace.getCars
          .mockReturnValueOnce([
            { name: 'pobi', advance: 2 },
            { name: 'woni', advance: 1 },
          ])
          .mockReturnValueOnce([
            { name: 'pobi', advance: 3 },
            { name: 'woni', advance: 2 },
          ]);
      }),
    };

    executeRaceRounds(mockRace);

    const actualLog = OutputView.printRoundResult.mock.calls.flatMap((call) =>
      call[0].map((car) => `${car.name} : ${'-'.repeat(car.advance)}`),
    );

    expect(actualLog).toEqual(expectedLog);
  });

  test('최종 우승자 출력', async () => {
    const inputs = ['pobi,woni', '1'];
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    const expectedLog = '최종 우승자 : pobi';

    mockQuestions(inputs);
    mockRandoms([4, 3]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedLog));
  });

  test('예외 테스트 - 유효하지 않은 자동차 이름 입력', async () => {
    const inputs = ['pobi, hellllllllooooo'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(
      '[ERROR] 자동차 이름은 1자 이상 5자 이하의 문자열이어야 합니다.',
    );
  });

  test('예외 테스트 - 유효하지 않은 시도 횟수 입력', async () => {
    const inputs = ['pobi,woni', '0'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(
      '[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.',
    );
  });
});

describe('최종 테스트', () => {
  test('전체 게임 진행 및 최종 출력 확인', async () => {
    const inputs = ['pobi,woni,jun', '2'];
    const expectedLogs = [
      '\n실행 결과',
      'pobi : -',
      'woni : ',
      'jun : -',
      '',
      'pobi : --',
      'woni : -',
      'jun : --',
      '',
      '최종 우승자 : pobi, jun',
    ];

    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([4, 3, 4, 4, 4, 4]); // 전진 여부 설정

    // App 구동
    const app = new App();
    await app.run();

    // 모든 출력 로그를 가져와 비교합니다.
    const actualLogs = logSpy.mock.calls.map((call) => call[0]);

    expectedLogs.forEach((log) => {
      expect(actualLogs).toEqual(expect.arrayContaining([log]));
    });
  });
});
