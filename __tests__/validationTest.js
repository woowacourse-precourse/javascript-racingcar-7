import ErrorMessage from '../src/resources/ErrorMessage';
import validateNames from '../src/utils/validation/validateNames';
import validateRepetitionString from '../src/utils/validation/validateRepetitionString';
import validateTimeComplexity from '../src/utils/validation/validateTimeComplexity';

describe('validateNames 함수 테스트', () => {
  test('이름이 하나만 입력되었을 때 예외를 발생시킨다.', () => {
    expect(() => validateNames('car1')).toThrow(
      ErrorMessage.MIN_TWO_NAMES_REQUIRED,
    );
  });

  test('이름이 5자를 초과하는 경우 예외를 발생시킨다.', () => {
    expect(() => validateNames('car1,car5678')).toThrow(
      ErrorMessage.NAME_LENGTH_EXCEEDED,
    );
  });

  test('이름이 콤마로 끝나는 경우 예외를 발생시킨다.', () => {
    expect(() => validateNames('car1,car2,')).toThrow(
      ErrorMessage.COMMA_ENDING_NAMES,
    );
  });

  test('이름 중간에 두 개의 쉼표가 포함될 때 예외를 발생시킨다.', () => {
    expect(() => validateNames('car1,,car2')).toThrow(
      ErrorMessage.UNKNOWN_INVALID_NAMES,
    );
  });

  test('이름이 빈 문자열일 때 예외를 발생시킨다.', () => {
    expect(() => validateNames('')).toThrow(ErrorMessage.EMPTY_NAMES_NOT_ALLOW);
  });
});

describe('validateRepetitionString 함수 테스트', () => {
  test('반복 횟수가 숫자가 아닐 때 예외를 발생시킨다.', () => {
    expect(() => validateRepetitionString('abc')).toThrow(
      ErrorMessage.INPUT_CONTAIN_CHARACTER,
    );
  });

  test('반복 횟수가 0일 때 예외를 발생시킨다.', () => {
    expect(() => validateRepetitionString('0')).toThrow(
      ErrorMessage.ZERO_NUMBER_INPUT,
    );
  });

  test('반복 횟수가 0으로 시작하는 경우 예외를 발생시킨다.', () => {
    expect(() => validateRepetitionString('05')).toThrow(
      ErrorMessage.STARTSWITH_ZERO_FORMAT,
    );
  });

  test('반복 횟수가 빈 문자열일 때 예외를 발생시킨다.', () => {
    expect(() => validateRepetitionString('')).toThrow(
      ErrorMessage.EMPTY_NUMBER_NOT_ALLOW,
    );
  });

  test('반복 횟수가 음수일 때 예외를 발생시킨다.', () => {
    expect(() => validateRepetitionString('-5')).toThrow(
      ErrorMessage.NEGATIVE_NUMBER_INPUT,
    );
  });

  test('반복 횟수가 소수점을 포함할 때 예외를 발생시킨다.', () => {
    expect(() => validateRepetitionString('3.5')).toThrow(
      ErrorMessage.DECIMAL_NUMBER_INPUT,
    );
  });
});

describe('validateTimeComplexity 함수 테스트', () => {
  test('시간 복잡도가 허용된 한계를 초과할 때 예외를 발생시킨다.', () => {
    const names = 'car1,car2';
    const repetitionString = '12345678';
    expect(() => validateTimeComplexity(names, repetitionString)).toThrow(
      ErrorMessage.OVER_VALID_TIMECOMPLEXITY,
    );
  });

  test('시간 복잡도가 허용된 한계를 초과하지 않을 때 예외가 발생하지 않는다.', () => {
    const names = 'car1,car2';
    const repetitionString = '1234567';
    expect(() => validateTimeComplexity(names, repetitionString)).not.toThrow();
  });
});
