import { makeOutput, formatWinners } from '../src/game/outputCar.js';

describe('makeOutput 출력함수 테스트', () => {
  it('car 데이터와 순위를 테스트 ', () => {
    expect(
      makeOutput([
        ['carA', 3],
        ['carB', 1],
      ]),
    ).toBe('carA : ---\ncarB : -\n');
  });

  it('returns empty string for empty car data', () => {
    expect(makeOutput([])).toBe('');
  });

  it('returns correct number of "-" for each car position', () => {
    expect(
      makeOutput([
        ['carA', 0],
        ['carB', 5],
      ]),
    ).toBe('carA : \ncarB : -----\n');
  });
});

describe('formatWinners', () => {
  it('formats multiple winners correctly', () => {
    expect(formatWinners([['carA'], ['carB']])).toBe(
      '최종 우승자 : carA, carB',
    );
  });

  it('formats a single winner correctly', () => {
    expect(formatWinners([['carA']])).toBe('최종 우승자 : carA');
  });

  it('returns empty or specific output for no winners', () => {
    expect(formatWinners([])).toBe('최종 우승자 : '); // or "" if that's the desired output
  });
});
