import { Console, Random } from '@woowacourse/mission-utils';
import Racing from '../src/Racing.js';
import Car from '../src/Car.js';

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Racing 메서드 테스트', () => {
  test('play 메서드에서 driving 메서드가 매 라운드 실행되는지 테스트', () => {
    const TOTAL_ROUNDS = 3;
    const CAR_NAME = 'woowa';

    const drivingSpy = jest.spyOn(Car.prototype, 'driving');

    const car = new Car(CAR_NAME);
    const racing = new Racing(TOTAL_ROUNDS, [car]);
    racing.play();

    expect(drivingSpy).toHaveBeenCalledTimes(TOTAL_ROUNDS);
  });

  test('showResult 메서드에서 결과가 출력되는지 테스트', () => {
    const TOTAL_ROUNDS = 2;
    const CAR_NAME1 = 'woowa';
    const CAR_NAME2 = 'tech';
    const printResults = [
      `${CAR_NAME1} : -`,
      `${CAR_NAME2} : `,
      `${CAR_NAME1} : --`,
      `${CAR_NAME2} : -`,
    ];
    const results = [
      [
        { name: CAR_NAME1, distance: 1 },
        { name: CAR_NAME2, distance: 0 },
      ],
      [
        { name: CAR_NAME1, distance: 2 },
        { name: CAR_NAME2, distance: 1 },
      ],
    ];

    const carNames = [CAR_NAME1, CAR_NAME2];
    const cars = carNames.map((name) => new Car(name));
    const carSpies = cars.map((carInstance) =>
      jest.spyOn(carInstance, 'driving'),
    );

    const logSpy = getLogSpy();

    results.forEach((roundResult) => {
      const [car1Result, car2Result] = roundResult;
      const [car1Spy, car2Spy] = carSpies;
      car1Spy.mockReturnValueOnce(car1Result);
      car2Spy.mockReturnValueOnce(car2Result);
    });

    const racing = new Racing(TOTAL_ROUNDS, cars);
    racing.play();
    racing.showResult();

    printResults.forEach((result) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
    });
  });

  test('showResult 메서드에서 1라운드 결과에만 header가 출력되는지 테스트', () => {
    const TOTAL_ROUNDS = 2;
    const CAR_NAME = 'woowa';
    const HEADER = '실행 결과';
    const EXPECTED_TIMES_WITH_HEADER = 2;

    const logSpy = getLogSpy();

    const car = new Car(CAR_NAME);
    const racing = new Racing(TOTAL_ROUNDS, [car]);
    racing.play();
    racing.showResult();

    const expectedLogLength = TOTAL_ROUNDS * 2 + 2;
    const calledTimes = Array.from(
      { length: expectedLogLength },
      (arrayLike, index) => index + 1,
    );

    calledTimes.forEach((nth) => {
      if (nth === EXPECTED_TIMES_WITH_HEADER) {
        expect(logSpy).toHaveBeenNthCalledWith(
          nth,
          expect.stringContaining(HEADER),
        );
      } else {
        expect(logSpy).toHaveBeenNthCalledWith(
          nth,
          expect.not.stringContaining(HEADER),
        );
      }
    });
  });

  test.each([
    [
      [
        [5, 5, 3],
        [5, 5, 5],
        [5, 3, 3],
      ],
      'tech',
      '단독 우승',
    ],
    [
      [
        [5, 5, 3],
        [5, 5, 3],
        [5, 3, 3],
      ],
      'woowa, tech',
      '공동 우승',
    ],
  ])(
    'announceWinner 메서드에서 우승자가 정상적으로 선정되는지 테스트',
    (carsMoving, winner) => {
      const TOTAL_ROUNDS = 3;
      const CAR_NAMES = ['woowa', 'tech', '코스'];
      const logSpy = getLogSpy();

      const cars = CAR_NAMES.map((name) => new Car(name));
      const racing = new Racing(TOTAL_ROUNDS, cars);

      const rounds = Array.from({ length: TOTAL_ROUNDS }, () => 0);
      rounds.forEach((round) => {
        const roundMoves = carsMoving.map((moves) => moves[round]);
        mockRandoms(roundMoves);

        racing.play();
      });

      racing.announceWinners();

      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(winner));
    },
  );
});
