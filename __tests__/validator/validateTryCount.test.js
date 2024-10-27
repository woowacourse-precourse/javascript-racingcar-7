import { validateTryCount } from '../../src/validator/validatePipeline';

// 유효한 시도 횟수 테스트 케이스
test.each([
  ['유효한 범위의 숫자가 입력된 경우', '1'],
  ['유효한 범위의 숫자가 입력된 경우', '123'],
  ['유효한 범위의 숫자가 입력된 경우', '1000'],
])('[유효한 시도 횟수 검사] %s : %s', (description, input) => {
  expect(validateTryCount(input)).toBe(input);
});
