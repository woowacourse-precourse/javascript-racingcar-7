import { Console } from '@woowacourse/mission-utils';
import outputView from './outputView.js';
import { GAME_MESSAGE } from '../constants/messages.js';

describe('outputView 출력테스트', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(Console, 'print').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('printRaceStatus 경주 상태를 올바르게 출력 테스트.', () => {
    test('자동차가 두 대 이상일 때 경주 상태를 올바르게 출력한다', () => {
      const cars = [
        { name: 'car1', position: 2 },
        { name: 'car2', position: 3 },
      ];
      outputView.printRaceStatus(cars);
      expect(consoleSpy).toHaveBeenCalledTimes(3);
      expect(consoleSpy).toHaveBeenNthCalledWith(1, 'car1 : --');
      expect(consoleSpy).toHaveBeenNthCalledWith(2, 'car2 : ---');
    });
  });

  describe('announceWinner 출력 확인', () => {
    test('우승자를 쉼표 기준으로 출력한다', () => {
      const winners = [{ name: 'car1' }, { name: 'car2' }];
      outputView.announceWinner(winners);

      expect(consoleSpy).toHaveBeenCalledWith(
        `${GAME_MESSAGE.FINAL_WINNER} car1, car2`
      );
    });
  });
});
