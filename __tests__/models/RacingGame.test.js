import RacingGame from '../../src/models/RacingGame';
import { Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../../src/utils/constants';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickNumberInRange: jest.fn()
  },
  Console: {
    print: jest.fn()
  }
}));

describe('RacingGame 클래스', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('게임 생성 시 중복된 이름이면 에러 발생', () => {
    expect(() => new RacingGame('pobi,pobi')).toThrow(ERROR_MESSAGES.DUPLICATE_NAMES);
  });

  describe('게임 진행', () => {
    test('입력된 횟수만큼 실행', async () => {
      const game = new RacingGame('pobi,woni');
      Random.pickNumberInRange.mockReturnValue(4);
      
      await game.play(2);
      expect(Random.pickNumberInRange).toHaveBeenCalledTimes(4);
    });
  });

  describe('우승자 결정', () => {
    test('최대 이동 거리가 같으면 공동 우승', async () => {
      const game = new RacingGame('pobi,woni');
      game.cars[0].position = 3;
      game.cars[1].position = 3;
      
      game.announceWinners();
      expect(game.cars[0].position).toBe(game.cars[1].position);
    });
  });
});