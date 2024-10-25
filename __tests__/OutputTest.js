import { formatWinnerNames, generateProgressBar } from '../src/OutputUtils.js';

describe('출력', () => {
  test('우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.', () => {
    const WINNER_NAMES = ['pobi', 'woni', 'jun'];
    const OUTPUT = 'pobi, woni, jun';

    expect(formatWinnerNames(WINNER_NAMES)).toEqual(OUTPUT);
  });

  test('자동차의 위치 값만큼 ' - ' 문자열로 반환한다.', () => {
    expect(generateProgressBar(3).toBe('---'));
  });
});
