import { validation } from '../src/utils/index.js';

describe('입력에 대한 테스트', () => {
  test('자동차 이름의 길이가 5를 넘는지', () => {
    const input = ['abc', 'bfdg', 'grjhi'];
    expect(validation.isLengthBelowFive(input)).toBe(true);
  });

  test.each([
    [['abc', 'b sf', 'asw'], true],
    [[' asd', 'bbs ', 'ag'], true],
    [['ab4c,', 'as@w', 'bj%#'], false],
    [[' ', '@*j', ')G9d'], true],
  ])('자동차 이름에 공백이 있는지', (inputs, expected) => {
    expect(validation.hasSpace(inputs)).toBe(expected);
  });

  test.each([
    [['abc', 'bj@', '20Gs'], false],
    [['', 'sow', '!@GH'], true],
  ])('자동차 이름이 작성 안됐는지', (input, expected) => {
    expect(validation.isEmpty(input)).toBe(expected);
  });

  test.each([
    [['pobi', 'jun', 'pobi'], false],
    [['asb', 'j#os', 'j9j'], true],
    [['pobi', 'Pobi', 'jun'], true],
  ])('자동차 이름이 중복 안되는지', (input, expected) => {
    expect(validation.isNotDuplicate(input)).toBe(expected);
  });

  test.each([
    [0, false],
    [1, true],
    [1.7, false],
    [10, true],
  ])('시도 횟수가 1이상의 정수인지', (input, expected) => {
    expect(validation.isPositiveInteger(input)).toBe(expected);
  });
});
