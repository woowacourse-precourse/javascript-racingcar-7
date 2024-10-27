import RacingGame from '../src/RacingGame.js';
import Car from '../src/Car.js';
import { Random, Console } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickNumberInRange: jest.fn(),
  },
  Console: {
    print: jest.fn(),
  },
}));

describe('RacingGame 클래스 테스트', () => {
  let cars;
  let racingGame;

  beforeEach(() => {
    cars = [new Car('car1'), new Car('car2')];
    racingGame = new RacingGame(cars, 3);
    Console.print.mockClear();
  });

  test('play 메서드: 전진 조건을 만족하는 경우 forwardCount가 증가', () => {
    Random.pickNumberInRange.mockReturnValue(5);

    racingGame.play();

    cars.forEach((car) => {
      expect(car.forwardCount).toBe(3);
    });
  });

  test('printResultByStep 메서드: 각 차의 이름과 전진한 횟수를 Console에 출력', () => {
    cars[0].forward();
    cars[1].forward();
    cars[1].forward();

    racingGame.printResultByStep(cars);

    expect(Console.print).toHaveBeenCalledWith('car1 : -');
    expect(Console.print).toHaveBeenCalledWith('car2 : --');
    expect(Console.print).toHaveBeenCalledWith('');
  });

  test('printWinners 메서드: 가장 많이 전진한 차의 이름을 Console에 출력', () => {
    cars[0].forward();
    cars[1].forward();
    cars[1].forward();

    racingGame.printWinners(cars);

    expect(Console.print).toHaveBeenCalledWith('최종 우승자 : car2');
  });
});
