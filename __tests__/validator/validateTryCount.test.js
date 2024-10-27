import { validateTryCount } from '../../src/validator/validatePipeline';
import { ERROR_MESSAGE } from '../../src/constants/messages';

// 유효한 시도 횟수 테스트 케이스
test.each([
  ['유효한 범위의 숫자가 입력된 경우', '1'],
  ['유효한 범위의 숫자가 입력된 경우', '123'],
  ['유효한 범위의 숫자가 입력된 경우', '1000'],
])('[유효한 시도 횟수 검사] %s : %s', (description, input) => {
  expect(validateTryCount(input)).toBe(input);
});

// 유효하지 않은 시도 횟수 테스트 케이스
test.each([
  ['1000 초과의 값이 입력된 경우', '1001', ERROR_MESSAGE.INVALID_NUMBER_RANGE],
  ['1미만의 값이 입력된 경우', '0', ERROR_MESSAGE.INVALID_NUMBER_RANGE],
  ['숫자 외의 문자가 포함된 경우', '123a', ERROR_MESSAGE.INVALID_NUMBER_INPUT],
  ['입력이 비어있는 경우', '', ERROR_MESSAGE.NULL_INPUT],
])(
  '[유효하지 않은 시도 횟수 검사] %s : %s',
  (description, input, expectError) => {
    expect(() => validateTryCount(input)).toThrow(expectError);
  },
);
