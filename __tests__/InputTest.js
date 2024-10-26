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
  ])('자동차 이름에 공백이 있는지', (inputs, expected) => {
    expect(validation.hasSpace(inputs)).toBe(expected);
  });
});
