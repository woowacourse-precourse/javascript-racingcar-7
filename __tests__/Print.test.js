import { printWinners } from '../src/utils/Print';

describe('우승자 결정 테스트', () => {
  test('가장 높은 위치에 있는 자동차가 단독 우승합니다.', () => {
    const raceResults = [
      { name: 'pobi', position: 3 },
      { name: 'crong', position: 2 },
      { name: 'honux', position: 1 },
    ];
    const winners = printWinners(raceResults);
    expect(winners).toBe('최종 우승자 : pobi');
  });

  test('여러 우승자가 발생할 경우, 쉼표로 구분하여 출력해야 합니다.', () => {
    const raceResults = [
      { name: 'pobi', position: 5 },
      { name: 'crong', position: 5 },
      { name: 'honux', position: 3 },
    ];
    const winners = printWinners(raceResults);
    expect(winners).toBe('최종 우승자 : pobi, crong');
  });
});
