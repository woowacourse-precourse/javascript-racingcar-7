import { validateCarNames } from '../../src/validator/validatePipeline';

const createCarArray = (size) =>
  Array.from({ length: size }, (_, i) => `a${i + 1}`);

// 유효한 자동차 이름 테스트 케이스
test.each([
  [
    '길이가 1이상 5이하의 이름만 포함된 경우',
    ['a', 'ab', 'abc', 'abcd', 'abcde'],
  ],
  ['중복없는 이름으로 이루어진 경우', ['carA', 'carB', 'carC', 'carD']],
  ['유효한 자동차 개수인 경우(1개 이상 100개 이하)', createCarArray(100)],
])('[유효한 자동차 이름 검사] %s : %s', (description, names) => {
  expect(validateCarNames(names)).toBe(names);
});
