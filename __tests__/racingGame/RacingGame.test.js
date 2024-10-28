import RacingGame from '../../src/racinggame/RacingGame';
import Car from '../../src/car/Car';

const testCase = [
  [
    '우승자가 1명인 경우',
    [new Car('car1', 1), new Car('car2', 2), new Car('car3', 3)], // 자동차 배열
    5, // 시도 횟수
    [1, 2, 3], // 예상되는 최종 전진 횟수
    ['car3'], // 예상되는 우승자
  ],
  [
    '우승자가 2명 이상인 경우',
    [new Car('carA', 5), new Car('carB', 4), new Car('carC', 5)],
    5,
    [5, 4, 5],
    ['carA', 'carC'],
  ],
];

describe.each(testCase)(
  '%s',
  (_, initialCars, tryCount, expectedMoveCount, expectedWinner) => {
    let racingGame;
    beforeEach(() => {
      racingGame = new RacingGame(initialCars, tryCount);
    });

    test('각 자동차의 최종 전진 횟수가 예상된 전진 횟수와 일치하는지 확인', () => {
      const moveCounts = racingGame.cars.map((car) => car.getMoveCount());
      expect(moveCounts).toEqual(expectedMoveCount);
    });

    test('최대 전진 횟수를 가진 자동차의 이름 목록이 예상된 우승자와 일치하는지 확인', () => {
      const winners = racingGame.getWinnerNames();
      expect(winners).toEqual(expectedWinner);
    });
  },
);
