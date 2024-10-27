import { mockRandoms } from '../../src/utils/testUtils.js';
import executeRace from '../../src/game/executeRace.js';

describe('레이싱 게임 테스트 - 각 상황별 우승자 결정', () => {
  const TEST_CASES = [
    {
      description: '모두 이동하지 못한 상황 공동우승',
      carNames: ['car1', 'car2'],
      moveCount: 3,
      randomValues: [2, 2, 2, 2, 2, 2],
      expectedWinners: ['car1', 'car2'],
    },
    {
      description: '모든 자동차가 같은 위치에 도달하여 공동 우승',
      carNames: ['car1', 'car2'],
      moveCount: 3,
      randomValues: [4, 4, 4, 4, 4, 4],
      expectedWinners: ['car1', 'car2'],
    },
    {
      description: '단일 우승자가 있는 경우',
      carNames: ['car1', 'car2'],
      moveCount: 3,
      randomValues: [5, 3, 6, 2, 5, 2],
      expectedWinners: ['car1'],
    },
    {
      description: '자동차가 한 대일 때 자동으로 우승',
      carNames: ['car1'],
      moveCount: 3,
      randomValues: [5, 5, 5],
      expectedWinners: ['car1'],
    }

  ];

  test.each(TEST_CASES)(
    '$description',
    ({ carNames, moveCount, randomValues, expectedWinners }) => {

      mockRandoms(randomValues);

      const winners = executeRace(carNames, moveCount);
      expect(winners).toEqual(expectedWinners);
    }
  );
});
