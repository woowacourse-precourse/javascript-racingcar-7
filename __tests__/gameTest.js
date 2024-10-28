import { Console, Random } from '@woowacourse/mission-utils';
import { OutputView } from '../src/resources/Constants.js';
import Game from '../src/components/Game.js';
import Car from '../src/components/Car.js';
import Rules from '../src/resources/Rules.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: { print: jest.fn() },
  Random: { pickNumberInRange: jest.fn() },
}));

describe('Game 클래스 테스트', () => {
  beforeEach(() => {
    Console.print.mockClear();
    Random.pickNumberInRange.mockClear();
  });

  describe('parseNames 메서드', () => {
    test('이름을 구분자로 나누어 배열을 반환한다.', () => {
      const names = 'Woo,Wa,Han';
      const result = Game.parseNames(names);
      expect(result).toEqual(['Woo', 'Wa', 'Han']);
    });
  });

  describe('allocateCars 메서드', () => {
    test('이름 배열을 Car 인스턴스로 변환하여 반환한다.', () => {
      const nameList = ['Woo', 'Wa', 'Han'];
      const cars = Game.allocateCars(nameList);
      expect(cars).toHaveLength(3);
      expect(cars[0]).toBeInstanceOf(Car);
      expect(cars[0].name).toBe('Woo');
      expect(cars[1].name).toBe('Wa');
      expect(cars[2].name).toBe('Han');
    });
  });

  describe('play 메서드', () => {
    test('게임을 진행하고 결과를 출력한다.', () => {
      const game = new Game('Woo,Wa', 3);

      Random.pickNumberInRange.mockReturnValue(Rules.THRESHOLD_NUMBER); // Woo, Wa 모두 전진

      const winners = game.play();

      expect(Console.print).toHaveBeenCalledWith(
        OutputView.RESULT_PRINT_BEGINNING,
      );
      expect(winners).toEqual(expect.arrayContaining(['Woo', 'Wa']));
    });
  });

  describe('startRound 메서드', () => {
    test('각 Car 인스턴스가 이동할지 여부를 결정한다.', () => {
      const game = new Game('Woo,Wa', 1);

      Random.pickNumberInRange
        .mockReturnValueOnce(Rules.THRESHOLD_NUMBER) // Woo 전진
        .mockReturnValueOnce(Rules.THRESHOLD_NUMBER - 1); // Wa 정지

      game.startRound();
      game.printRoundResults();

      expect(Console.print).toHaveBeenNthCalledWith(
        1,
        `Woo : ${OutputView.DISTANCE_DRAWING}`,
      );
      expect(Console.print).toHaveBeenNthCalledWith(2, `Wa : `);
      expect(Console.print).toHaveBeenNthCalledWith(3, ''); // 라운드 구분 공백
    });
  });
});
