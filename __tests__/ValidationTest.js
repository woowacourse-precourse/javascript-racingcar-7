import {
  validateCarNamesInput,
  validateTurnCount,
} from '../src/util/validation.js';
import { ERROR_MESSAGE } from '../src/constant/message.js';
import { CONFIG } from '../src/constant/config.js';

describe('자동차 이름 유효성 검사', () => {
  test('자동차 이름이 유효할 때 예외가 발생하지 않아야 한다.', () => {
    const carNames = ['pobi', 'woni'];
    expect(() => validateCarNamesInput(carNames)).not.toThrow();
  });

  test('자동차 이름이 1자 미만일 때 예외가 발생해야 한다.', () => {
    const carNames = ['', 'woni'];
    expect(() => validateCarNamesInput(carNames)).toThrow(
      ERROR_MESSAGE.INVALID_CAR_NAME
    );
  });

  test('자동차 이름이 5자 초과일 때 예외가 발생해야 한다.', () => {
    const carNames = ['pobiwoniu', 'woni'];
    expect(() => validateCarNamesInput(carNames)).toThrow(
      ERROR_MESSAGE.INVALID_CAR_NAME
    );
  });

  test('자동차가 2대 미만일 때 예외가 발생해야 한다.', () => {
    const carNames = ['pobi'];
    expect(() => validateCarNamesInput(carNames)).toThrow(
      ERROR_MESSAGE.MIN_CARS_REQUIRED
    );
  });

  test('자동차 이름이 중복될 때 예외가 발생해야 한다.', () => {
    const carNames = ['pobi', 'pobi'];
    expect(() => validateCarNamesInput(carNames)).toThrow(
      ERROR_MESSAGE.CAR_ALREADY_EXISTS
    );
  });
});

describe('시도 횟수 유효성 검사', () => {
  test('시도 횟수가 유효할 때 예외가 발생하지 않아야 한다.', () => {
    const turnCount = CONFIG.MIN_TURN_COUNT + 1;
    expect(() => validateTurnCount(turnCount)).not.toThrow();
  });

  test('시도 횟수가 1 미만일 때 예외가 발생해야 한다.', () => {
    const turnCount = CONFIG.MIN_TURN_COUNT - 1;
    expect(() => validateTurnCount(turnCount)).toThrow(
      ERROR_MESSAGE.INVALID_TURN_COUNT
    );
  });

  test('시도 횟수가 10 초과일 때 예외가 발생해야 한다.', () => {
    const turnCount = CONFIG.MAX_TURN_COUNT + 1;
    expect(() => validateTurnCount(turnCount)).toThrow(
      ERROR_MESSAGE.INVALID_TURN_COUNT
    );
  });
});
