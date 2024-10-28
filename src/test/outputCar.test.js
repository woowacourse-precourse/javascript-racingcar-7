import { makeOutput, formatWinners } from '../game/outputCar.js';

describe('makeOutput 출력함수 테스트', () => {
  test.each([
    {
      input: [
        { name: 'carA', location: 3 },
        { name: 'carB', location: 1 },
      ],
      expected: 'carA : ---\ncarB : -\n',
      description: 'car 데이터와 순위 테스트',
    },
    { input: [], expected: '', description: '빈값 입력시 출력' },
  ])('$description', ({ input, expected }) => {
    expect(makeOutput(input)).toBe(expected);
  });
});

describe('formatWinners 승리 출력 메시지', () => {
  test.each([
    {
      input: [
        { name: 'carA', location: 3 },
        { name: 'carB', location: 3 },
      ],
      expected: '최종 우승자 : carA, carB',
      description: '최종우승자 두명',
    },
    {
      input: [{ name: 'carA', location: 3 }],
      expected: '최종 우승자 : carA',
      description: '최종 우승자 한명',
    },
    {
      input: [],
      expected: '최종 우승자 : ',
      description: '최종 우승자가 없는 경우',
    },
  ])('$description', ({ input, expected }) => {
    expect(formatWinners(input)).toBe(expected);
  });
});
