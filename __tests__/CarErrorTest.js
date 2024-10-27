import { CAR_VALIDATION } from '../src/Validator/carValidation.js';

describe('CAR_VALIDATION', () => {
  test('자동차 이름은 공백이 될 수 없습니다.', () => {
    expect(() => CAR_VALIDATION('')).toThrow(
      '[ERROR] 자동차 이름은 공백이 될 수 없습니다.',
    );
  });
  test('자동차 이름 중 중복이 있습니다.', () => {
    expect(() => CAR_VALIDATION('pobi,pobi')).toThrow(
      '[ERROR] 자동차 이름 중 중복이 있습니다.',
    );
  });
  test('자동차 이름은 5글자를 초과할 수 없습니다.', () => {
    expect(() => CAR_VALIDATION('pobidi,pobi')).toThrow(
      '[ERROR] 자동차 이름은 5글자를 초과할 수 없습니다.',
    );
  });

  test('자동차 이름은 문자가 아닌 값이 포함될 수 없습니다.', () => {
    expect(() => CAR_VALIDATION('pobi,11')).toThrow(
      '[ERROR] 자동차 이름은 문자가 아닌 값이 포함될 수 없습니다.',
    );
  });
  test('자동차는 10대를 초과할 수 없습니다.', () => {
    expect(() => CAR_VALIDATION('a,b,c,d,e,f,g,h,i,j,k')).toThrow(
      '[ERROR] 자동차는 10대를 초과할 수 없습니다.',
    );
  });
  test('자동차 이름의 구분자가 쉼표여야 합니다.', () => {
    expect(() => CAR_VALIDATION('pobi woni')).toThrow(
      '[ERROR] 자동차 이름의 구분자는 쉼표여야합니다.',
    );
  });
  test('정상 작동', () => {
    expect(() => CAR_VALIDATION('pobi,woni')).not.toThrow();
  });
});
