import { validateCarNamesInput } from '../src/validator.js';

describe('validator 테스트', () => {
  test('자동차 이름 예외 테스트', () => {
    const inputs = [
      'pobi,javaji',
      'pobi',
      'pobi,a',
      'pobi,@&@&@',
      'pobi,pobi',
      'pobi,',
      'pobi,121212',
      '',
    ];

    inputs.forEach((input) => {
      expect(() => validateCarNamesInput(input)).toThrow('[ERROR]');
    });
  });

  test('자동차 이름 정상 테스트', () => {
    const inputs = ['pobi,java', 'pobi,woni,a1212', 'pobi,java,woni'];

    inputs.forEach((input) => {
      expect(() => validateCarNamesInput(input)).not.toThrow();
    });
  });
});
