import { splitCarName, validateCarNameLength, validateCarsLength } from '../src/InputUtils';

describe('입력', () => {
  test('자동차 이름은 쉼표(,)를 기준으로 구분한다.', () => {
    const INPUT = 'pobi,woni,jun';
    const NAMES = ['pobi', 'woni', 'jun'];

    expect(splitCarName(INPUT)).toEqual(NAMES);
  });

  test('자동차 이름은 5자 이하만 가능하다.', () => {
    const inputs = ['pobi, javaji'];
    expect(() => validateCarNameLength(inputs)).toThrow('[ERROR]');
  });

  test('자동차는 1대 이상 있어야 한다.', () => {
    const inputs = [];
    expect(() => validateCarsLength(inputs)).toThrow('[ERROR]');
  });
});
