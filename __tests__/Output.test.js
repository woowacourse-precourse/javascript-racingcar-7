import { makeOutput, formatWinners } from '../src/game/outputCar.js';

describe('makeOutput 출력함수 테스트', () => {
  it('car 데이터와 순위를 테스트 ', () => {
    expect(
      makeOutput([
        { name: 'carA', location: 3 },
        { name: 'carB', location: 1 },
      ]),
    ).toBe('carA : ---\ncarB : -\n');
  });

  it('빈갑 입력시 출력', () => {
    expect(makeOutput([])).toBe('');
  });
});

describe('formatWinners 승리 출력 메시지', () => {
  it('최종우승자 두명', () => {
    expect(formatWinners([['carA'], ['carB']])).toBe(
      '최종 우승자 : carA, carB',
    );
  });

  it('최종 우승자 한명', () => {
    expect(formatWinners([['carA']])).toBe('최종 우승자 : carA');
  });

  it('최종 우승자가 없는 경우', () => {
    expect(formatWinners([])).toBe('최종 우승자 : ');
  });
});
