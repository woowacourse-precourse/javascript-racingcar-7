import { validateRacingCarInput } from '../../src/validator/validatePipeline';

// 유효한 문자열 테스트 케이스
describe.each([
  ['알파벳과 쉼표만 포함된 경우1', 'carA,carB,carC'],
  ['알파벳과 쉼표만 포함된 경우2', 'car,ra,carB'],
  ['알파벳만 포함된 경우2', 'CAR'],
])('유효한 문자열 검사: %s', (description, input) => {
  test(`${description} : ${input} `, () => {
    expect(validateRacingCarInput(input)).toBe(input);
  });
});
