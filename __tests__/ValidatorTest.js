import { ERROR } from '../src/constant';
import Validator from '../src/Validator.js';

describe('Validator 클래스 테스트', () => {
  test.each([
    { input: '', error: ERROR.EMPTY_STRING },
    { input: '   ', error: ERROR.EMPTY_STRING },
  ])('사용자의 입력이 빈 문자열인 경우 예외', ({ input, error }) => {
    expect(() => Validator.userInput(input)).toThrow(error);
  });

  test.each([{ input: 'pobi' }, { input: 'yeongi' }])(
    '사용자의 입력이 빈 문자열이 아닌 경우 통과',
    ({ input }) => {
      expect(() => Validator.userInput(input)).not.toThrow();
    },
  );

  test.each([
    { input: [], error: ERROR.MIN_CAR_NUMBER },
    { input: ['pobi'], error: ERROR.MIN_CAR_NUMBER },
    {
      input: Array(1001)
        .fill('0')
        .map((_, idx) => idx),
      error: ERROR.MAX_CAR_NUMBER,
    },
  ])(
    '자동차 갯수가 1개 이하, 또는 1001개 이상인 경우 예외',
    ({ input, error }) => {
      expect(() => Validator.car(input)).toThrow(error);
    },
  );

  test.each([
    { input: ['pobi', 'yeon', 'woni'] },
    {
      input: Array(20)
        .fill('0')
        .map((_, idx) => idx),
    },
  ])('자동차 갯수가 2~20개 경우 통과', ({ input }) => {
    expect(() => Validator.car(input)).not.toThrow();
  });

  test('자동차 이름 길이 검증', () => {
    const failCars = ['pobipobi', 'yeongi'];
    const trueCars = ['pobi', 'woni'];

    expect(() => Validator.car(failCars)).toThrow(ERROR.CAR_NAME_LENGTH);

    expect(() => Validator.car(trueCars)).not.toThrow();
  });

  test('자동차 이름 중복 검증', () => {
    const failInput = ['pobi', 'pobi', 'yeon'];
    const trueInput = ['pobi', 'woni', 'yeon'];

    expect(() => Validator.car(failInput)).toThrow(ERROR.CONFLICTING_CAR_NAME);

    expect(() => Validator.car(trueInput)).not.toThrow();
  });

  test.each([
    { input: 0, error: ERROR.MIN_TRY_NUMBER },
    { input: 10001, error: ERROR.MAX_TRY_NUMBER },
    { input: 'ab', error: ERROR.INTEGER_TRY_NUMBER },
    { input: 1.5, error: ERROR.INTEGER_TRY_NUMBER },
  ])('시도 횟수 1~10000까지의 정수가 아닌 경우 예외', ({ input, error }) => {
    expect(() => Validator.tryNumber(input)).toThrow(error);
  });

  test.each([{ input: 10 }, { input: 20 }, { input: 4 }, { input: 10000 }])(
    '시도 횟수가 1~10000까지의 정수인 경우 통과',
    ({ input }) => {
      expect(() => Validator.tryNumber(input)).not.toThrow();
    },
  );
});
