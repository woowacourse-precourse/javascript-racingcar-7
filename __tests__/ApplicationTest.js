import App from '../src/App.js';
import Car from '../src/Car.js';
import Game from '../src/Game.js';
import InputView from '../src/InputView.js';
import OutputView from '../src/OutputView.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const MOVING_FORWARD = 4;
const STOP = 3;

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

describe('자동차 경주 기능 목록 테스트', () => {
  test('1. Car 클래스 및 이름 길이 검증', () => {
    expect(() => new Car('자동차자동차자동차')).toThrow(
      '[ERROR] 이름 길이는 최대 5자까지 가능합니다.',
    );
    const car = new Car('pobi');
    expect(car.getName()).toBe('pobi');
    expect(car.getPosition()).toBe(0);
  });

  test('2. 자동차 이름 입력 기능', async () => {
    mockQuestions(['pobi,woni,jun']);
    const carNames = await InputView.getCarNames();
    expect(carNames).toEqual(['pobi', 'woni', 'jun']);
  });

  test('3. 시도할 회수 입력 기능', async () => {
    mockQuestions(['5']);
    const rounds = await InputView.getRounds();
    expect(rounds).toBe(5);
  });

  test('4. 각 라운드 결과 출력 기능', () => {
    const logSpy = getLogSpy();
    const car1 = new Car('pobi');
    car1.move();
    const car2 = new Car('woni');
    const car3 = new Car('jun');
    car3.move();

    OutputView.printPositions([car1, car2, car3]);
    expect(logSpy).toHaveBeenCalledWith('pobi : -');
    expect(logSpy).toHaveBeenCalledWith('woni : ');
    expect(logSpy).toHaveBeenCalledWith('jun : -');
  });

  test('5. Game 클래스 및 게임 진행 로직 구현', () => {
    const game = new Game(['pobi', 'woni', 'jun']);
    mockRandoms([MOVING_FORWARD, STOP, MOVING_FORWARD]);
    game.start(1);

    expect(game.cars[0].getPosition()).toBe(1); // pobi가 전진
    expect(game.cars[1].getPosition()).toBe(0); // woni는 정지
    expect(game.cars[2].getPosition()).toBe(1); // jun이 전진
  });

  test('6. 우승자 판별 로직', () => {
    const game = new Game(['pobi', 'woni', 'jun']);
    mockRandoms([
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD, // 라운드 1
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD, // 라운드 2
    ]);
    game.start(2);

    expect(game.getWinners()).toEqual(['pobi', 'jun']);
  });

  test('7. App 클래스 및 전체 게임 흐름 관리', async () => {
    const inputs = ['pobi,woni,jun', '5'];
    const logSpy = getLogSpy();
    mockQuestions(inputs);

    mockRandoms([
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD, // 1라운드
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD, // 2라운드
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD, // 3라운드
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD, // 4라운드
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD, // 5라운드
    ]);

    const app = new App();
    await app.run();

    const expectedLogs = [
      'pobi : -',
      'woni : ',
      'jun : -',
      '\n',
      'pobi : --',
      'woni : -',
      'jun : --',
      '\n',
      'pobi : ---',
      'woni : --',
      'jun : ---',
      '\n',
      'pobi : ----',
      'woni : ---',
      'jun : ----',
      '\n',
      'pobi : -----',
      'woni : ----',
      'jun : -----',
      '\n',
      '최종 우승자 : pobi, jun',
    ];

    expectedLogs.forEach((log, index) => {
      expect(logSpy).toHaveBeenNthCalledWith(index + 1, log);
    });
  });

  test('8. 예외 처리 기능 - 자동차 이름 길이 초과', async () => {
    mockQuestions(['pobi,javaji']);
    const app = new App();
    await expect(app.run()).rejects.toThrow(
      '[ERROR] 이름 길이는 최대 5자까지 가능합니다.',
    );
  });

  test('9. 예외 처리 기능 - 시도 횟수 유효성 검사', async () => {
    mockQuestions(['pobi,woni,jun', '-1']);
    const app = new App();
    await expect(app.run()).rejects.toThrow(
      '[ERROR] 유효한 숫자를 입력하세요.',
    );
  });
});
