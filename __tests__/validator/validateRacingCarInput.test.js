import { validateRacingCarInput } from '../../src/validator/validatePipeline';
import { ERROR_MESSAGE } from '../../src/constants/messages';

// 유효한 문자열 테스트 케이스
test.each([
  ['알파벳, 숫자 쉼표만 포함된 경우', 'car1,car2,car3'],
  ['알파벳 쉼표만 포함된 경우', 'carA,carB,carC'],
  ['숫자 쉼표만 포함된 경우', '1,2,3'],
  ['알파벳만 포함된 경우', 'CaR'],
  ['숫자만 포함된 경우', '12345'],
])('[유효한 문자열 검사] %s : %s', (description, input) => {
  expect(validateRacingCarInput(input)).toBe(input);
});

// 유효하지 않은 문자열 테스트 케이스
test.each([
  [
    '알파벳,숫자,쉼표 외의 문자가 포함된 경우(특수 문자)',
    'car,carA,carC!',
    ERROR_MESSAGE.INVALID_CAR_INPUT,
  ],
  [
    '알파벳,숫자,쉼표 외의 문자가 포함된 경우(한글)',
    'car,carA,자동차',
    ERROR_MESSAGE.INVALID_CAR_INPUT,
  ],
  ['입력이 비어있는 경우', '', ERROR_MESSAGE.NULL_INPUT],
])(
  '[유효하지 않은 문자열 검사] %s : %s',
  (description, input, expectedError) => {
    expect(() => validateRacingCarInput(input)).toThrow(expectedError);
  },
);
