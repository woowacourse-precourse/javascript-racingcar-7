import { validateCars, validateTrial } from '../src/validation.js';

describe('validateCars', () => {
  test('경주할 자동차 입력이 비어있을 때 오류를 발생시킨다.', () => {
    expect(() => validateCars([])).toThrow(
      '[ERROR] 경주할 자동차가 없습니다.'
    );
  });

  test('경주할 자동차 이름이 5자를 초과할 때 오류를 발생시킨다.', () => {
    expect(() => validateCars(['longname'])).toThrow(
      '[ERROR] 자동차 이름은 5자 이하만 가능합니다.'
    );
  });

  test('경주할 자동차 입력이 유효할 때 오류가 발생하지 않는다.', () => {
    expect(() => validateCars(['car1', 'car2', 'car3'])).not.toThrow()
  });
});

describe('validateTrial', () => {
  test('시도 횟수 입력이 숫자가 아닐 때 오류를 발생시킨다.', () => {
    expect(() => validateTrial('a')).toThrow(
      '[ERROR] 시도 횟수는 숫자여야 합니다.'
    );
  });

  test('시도 횟수가 0 이하일 때 오류를 발생시킨다.', () => {
    expect(() => validateTrial(0)).toThrow(
      '[ERROR] 시도 횟수는 0보다 커야 합니다.'
    );
  });

  test('시도 횟수 입력이 유효할 때 오류가 발생하지 않는다.', () => {
    expect(() => validateTrial(1)).not.toThrow();
  });
});