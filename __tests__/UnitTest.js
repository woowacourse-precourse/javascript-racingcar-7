import { findWinners } from '../src/race/findWinners.js';
import { isAdvance } from '../src/race/isAdvance.js';

describe('Unit test', () => {
  test.each([
    [3, false],
    [4, true],
    [5, true],
  ])('isAdvance(%s) retruns %s', (num, expected) => {
    expect(isAdvance(num)).toBe(expected);
  });

  test.each([
    [['a', 'b'], ['--', '-'], 'a'],
    [['a', 'b'], ['--', '--'], 'a, b'],
    [['a', 'b'], ['-', '--'], 'b'],
  ])('누적된 막대로 우승자 구하기', (cars, results, expected) => {
    expect(findWinners(cars, results)).toBe(expected);
  });
});
