import { formatWinnerNames } from '../src/OutputUtils';

describe('출력', () => {
  test('우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.', () => {
    const WINNER_NAMES = ['pobi', 'woni', 'jun'];
    const OUTPUT = 'pobi, woni, jun';

    expect(formatWinnerNames(WINNER_NAMES)).toEqual(OUTPUT);
  });
});
