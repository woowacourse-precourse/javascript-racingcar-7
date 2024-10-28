import getWinners from '../src/getWinners.js';

describe('최종 우승자 계산 테스트', () => {
  test('단독 우승자가 있는 경우', () => {
    const raceResult = [
      { name: 'pobi', position: '---' },
      { name: 'woni', position: '-' },
      { name: 'jun', position: '--' },
    ];
    const winners = getWinners(raceResult);

    expect(winners).toEqual(['pobi']);
  });

  test('공동 우승자가 있는 경우', () => {
    const raceResult = [
      { name: 'pobi', position: '--' },
      { name: 'woni', position: '--' },
      { name: 'jun', position: '--' },
    ];
    const winners = getWinners(raceResult);

    expect(winners).toEqual(['pobi', 'woni', 'jun']);
  });
});
