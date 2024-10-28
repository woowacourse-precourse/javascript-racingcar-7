import { Console, Random } from '@woowacourse/mission-utils';
import { OutputView } from '../src/resources/Constants.js';
import Game from '../src/components/Game.js';
import Rules from '../src/resources/Rules.js';
import Output from '../src/utils/io/Output.js';
import RoundManager from '../src/components/RoundManager.js';
import CarAllocator from '../src/components/CarAllocator.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: { print: jest.fn() },
  Random: { pickNumberInRange: jest.fn() },
}));

jest.mock('../src/components/CarAllocator');
jest.mock('../src/components/RoundManager');
jest.mock('../src/utils/io/Output.js', () => ({
  print: jest.fn(),
  printRoundResults: jest.fn(),
}));

describe('Game 클래스 테스트', () => {
  beforeEach(() => {
    Console.print.mockClear();
    Random.pickNumberInRange.mockClear();
    CarAllocator.parseNames.mockClear();
    CarAllocator.allocateCars.mockClear();
    RoundManager.prototype.startRound.mockClear();
    RoundManager.prototype.getCarsStatuses.mockClear();
    RoundManager.prototype.getWinners.mockClear();
    Output.print.mockClear();
    Output.printRoundResults.mockClear();
  });

  describe('play 메서드', () => {
    test('게임을 진행하고 결과를 출력한다.', () => {
      CarAllocator.parseNames.mockReturnValue(['Woo', 'Wa']);
      CarAllocator.allocateCars.mockReturnValue([
        { name: 'Woo' },
        { name: 'Wa' },
      ]);

      const game = new Game('Woo,Wa', 3);

      Random.pickNumberInRange.mockReturnValue(Rules.THRESHOLD_NUMBER); // Woo, Wa 모두 전진

      RoundManager.prototype.startRound.mockImplementation(() => {});
      RoundManager.prototype.getCarsStatuses.mockReturnValue([
        { name: 'Woo', distance: 1 },
        { name: 'Wa', distance: 1 },
      ]);
      RoundManager.prototype.getWinners.mockReturnValue(['Woo', 'Wa']);

      const winners = game.play();

      expect(Output.print).toHaveBeenCalledWith(
        OutputView.RESULT_PRINT_BEGINNING,
      );
      expect(Output.printRoundResults).toHaveBeenCalledTimes(3);
      expect(Output.printRoundResults).toHaveBeenCalledWith([
        { name: 'Woo', distance: 1 },
        { name: 'Wa', distance: 1 },
      ]);
      expect(winners).toEqual(expect.arrayContaining(['Woo', 'Wa']));
    });
  });

  describe('startRound 메서드', () => {
    test('각 Car 인스턴스가 이동할지 여부를 결정한다.', () => {
      CarAllocator.parseNames.mockReturnValue(['Woo', 'Wa']);
      CarAllocator.allocateCars.mockReturnValue([
        { name: 'Woo' },
        { name: 'Wa' },
      ]);

      const game = new Game('Woo,Wa', 1);

      Random.pickNumberInRange
        .mockReturnValueOnce(Rules.THRESHOLD_NUMBER) // Woo 전진
        .mockReturnValueOnce(Rules.THRESHOLD_NUMBER - 1); // Wa 정지

      RoundManager.prototype.startRound.mockImplementation((cars) => {
        cars[0].currentDistance = Rules.INITIAL_DISTANCE + Rules.MOVE_LENGTH;
        cars[1].currentDistance = Rules.INITIAL_DISTANCE;
      });
      RoundManager.prototype.getCarsStatuses.mockReturnValue([
        { name: 'Woo', distance: Rules.INITIAL_DISTANCE + Rules.MOVE_LENGTH },
        { name: 'Wa', distance: Rules.INITIAL_DISTANCE },
      ]);

      game.play();

      expect(Output.printRoundResults).toHaveBeenCalledWith([
        { name: 'Woo', distance: Rules.INITIAL_DISTANCE + Rules.MOVE_LENGTH },
        { name: 'Wa', distance: Rules.INITIAL_DISTANCE },
      ]);
    });
  });
});
