import { validateCarNames } from '../../src/validator/validatePipeline';
import { ERROR_MESSAGE } from '../../src/constants/messages';

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

// 유효하지 않은 자동차 이름 테스트 케이스
test.each([
  [
    '길이가 6자 이상의 이름이 포함된 경우',
    ['car', 'racingCar', 'jeep'],
    ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH,
  ],
  [
    '비어 있는 이름이 포함된 경우',
    ['car', '', 'jeep'],
    ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH,
  ],
  [
    '중복되는 이름이 포함된 경우',
    ['car1', 'car2', 'car3', 'car1'],
    ERROR_MESSAGE.DUPLICATE_NAME,
  ],
  [
    '유효한 자동차 개수를 넘어간 경우',
    createCarArray(101),
    ERROR_MESSAGE.LIMIT_CAR_COUNT,
  ],
])(
  '[유효하지 않은 자동차 이름 검사] %s : %s',
  (description, names, expectedError) => {
    expect(() => validateCarNames(names)).toThrow(expectedError);
  },
);
