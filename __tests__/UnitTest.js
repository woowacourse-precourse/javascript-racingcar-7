import {
  validateCarNamesInput,
  validateAttemptCount,
} from '../src/validator.js';

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

  test('시도할 횟수 예외 테스트', () => {
    const inputs = ['-1', '', '1.2', '11', '0', 'a', '.2'];

    inputs.forEach((input) => {
      expect(() => validateAttemptCount(input)).toThrow('[ERROR]');
    });
  });

  test('시도할 횟수 정상 테스트', () => {
    const inputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    inputs.forEach((input) => {
      expect(() => validateAttemptCount(input)).not.toThrow();
    });
  });
});
