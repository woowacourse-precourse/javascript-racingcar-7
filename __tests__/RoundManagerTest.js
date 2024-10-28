import { Console, Random } from '@woowacourse/mission-utils';
import Car from '../src/components/Car.js';
import Rules from '../src/resources/Rules.js';
import RoundManager from '../src/components/RoundManager.js';
import { OutputView } from '../src/resources/Constants.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: { print: jest.fn() },
  Random: { pickNumberInRange: jest.fn() },
}));

describe('RoundManager 클래스 테스트', () => {
  let cars;
  let roundManager;

  beforeEach(() => {
    Console.print.mockClear();
    Random.pickNumberInRange.mockClear();
    cars = [new Car('Woo'), new Car('Wa')];
    roundManager = new RoundManager();
  });

  describe('startRound 메서드', () => {
    test('각 Car 인스턴스가 이동할지 여부를 결정한다.', () => {
      Random.pickNumberInRange
        .mockReturnValueOnce(Rules.THRESHOLD_NUMBER) // Woo 전진
        .mockReturnValueOnce(Rules.THRESHOLD_NUMBER - 1); // Wa 정지

      roundManager.startRound(cars);

      expect(cars[0].currentDistance).toBe(
        Rules.INITIAL_DISTANCE + Rules.MOVE_LENGTH,
      );
      expect(cars[1].currentDistance).toBe(Rules.INITIAL_DISTANCE);
    });
  });

  describe('getCarsStatuses 메서드', () => {
    test('각 자동차의 상태를 반환한다.', () => {
      cars[0].moveForward();
      const statuses = roundManager.getCarsStatuses(cars);

      expect(statuses).toEqual([
        { name: 'Woo', distance: Rules.INITIAL_DISTANCE + Rules.MOVE_LENGTH },
        { name: 'Wa', distance: Rules.INITIAL_DISTANCE },
      ]);
    });
  });

  describe('getWinners 메서드', () => {
    test('가장 멀리 간 자동차의 이름을 반환한다.', () => {
      cars[0].moveForward();
      cars[0].moveForward(); // Woo가 더 멀리 감
      const winners = roundManager.getWinners(cars);

      expect(winners).toEqual(['Woo']);
    });

    test('가장 멀리 간 자동차가 여러 대일 경우 모두 반환한다.', () => {
      cars[0].moveForward();
      cars[1].moveForward(); // Woo와 Wa 모두 같은 거리 이동
      const winners = roundManager.getWinners(cars);

      expect(winners).toEqual(expect.arrayContaining(['Woo', 'Wa']));
    });
  });
});
