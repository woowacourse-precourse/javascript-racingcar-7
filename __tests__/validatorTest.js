import validator from '../src/utils/validator.js';

describe('validator 테스트', () => {
  test.each([
    { input: ['abcdef'], result: false },
    { input: [''], result: false },
    { input: ['abcde'], result: true },
  ])('자동차 이름 길이 검사(입력 : $input 결과 : $result)', ({ input, result }) => {
    expect(validator.validateNameLength(input)).toBe(result);
  });
  test.each([
    { input: ['a', 'a'], result: false },
    { input: ['a', 'b'], result: true },
  ])('자동차 이름 중복여부 검사(입력 : $input 결과 : $result)', ({ input, result }) => {
    expect(validator.validateNotDuplicated(input)).toBe(result);
  });
  test.each([
    { input: [' a'], result: false },
    { input: ['a '], result: false },
    { input: [' '], result: false },
    { input: ['ab cd'], result: true },
  ])(
    '자동차 이름에 양 옆에 공백이 없는지 검사(입력 : $input 결과 : $result)',
    ({ input, result }) => {
      expect(validator.validateTrim(input)).toBe(result);
    },
  );
  test.each([
    { input: '', result: false },
    { input: 1.1, result: false },
    { input: 0, result: false },
    { input: '3회', result: false },
    { input: -1, result: false },
    { input: 1, result: true },
    { input: 10, result: true },
  ])(
    '시도 횟수로 1이상의 정수가 입력됐는지 검사(입력 : $input 결과 : $result)',
    ({ input, result }) => {
      expect(validator.integerGreaterOrEqualToOne(input)).toBe(result);
    },
  );
});
