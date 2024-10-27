import { findWinners } from '../src/App';

describe('자동차 경주: 우승자 판별 로직 테스트', () => {
  test('단일 우승자가 있을 때 우승자를 판별한다', () => {
    //given
    const playerScores = [
      { name: 'minda', score: 3 },
      { name: 'marge', score: 1 },
      { name: 'lisa', score: 0 },
    ];

    const expectedWinner = 'minda';

    // when
    const winner = findWinners(playerScores);

    // then
    expect(winner).toBe(expectedWinner);
  });

  test('다중 우승자가 있을 때 모든 우승자를 반환한다', () => {
    // given
    const playerScores = [
      { name: 'minda', score: 1 },
      { name: 'marge', score: 3 },
      { name: 'lisa', score: 3 },
    ];
    const expectedWinners = 'marge, lisa';

    // when
    const winners = findWinners(playerScores);

    // then
    expect(winners).toBe(expectedWinners);
  });
});
