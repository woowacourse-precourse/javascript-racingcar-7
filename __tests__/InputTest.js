import { validation } from '../src/utils/index.js';

test('자동차 이름의 길이가 5를 넘는지', () => {
  const input = 'abc,bfdg,grjhi';
  expect(validation.isLengthBelowFive(input)).toBe(true);
});
