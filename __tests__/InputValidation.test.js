import { VALIDATION_ERROR_MESSAGE } from '../src/constants/constants';

describe('Input Validation 테스트', () => {
  // isEmptyStringIncluded
  describe('빈 문자열, 공란 등의 값 입력 검증', () => {
    test.each([
      ['pobi,woni', true],
      ['pobi, woni', VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
      [null, VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
      [undefined, VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
      ['', VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
      ['   ', VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
    ])('입력 "%s" 일 때, 기대 결과 : %s', (input, expected) => {
      const result = isEmptyStringIncluded(input);
      expect(result).toBe(expected);
    });
  });

  // isValidCarName
  // 자동차 이름은 1~5글자의 영문대소문자, 숫자, 하이픈('-'), 언더스코어('_')라는 규칙
  describe('자동차 이름 검증', () => {
    test.each([
      ['pobi', true],
      ['woni', true],
      ['crong', true],
      ['hoit', true],
      [null, VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
      [undefined, VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
      ['pobi!', VALIDATION_ERROR_MESSAGE.INVALID_NAME_FORMAT],
      ['wo ni', VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
      ['po@bi', VALIDATION_ERROR_MESSAGE.INVALID_NAME_FORMAT],
      ['pobiiii', VALIDATION_ERROR_MESSAGE.NAME_LENGTH_OUT_OF_RANGE],
      ['', VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
    ])('입력 "%s" 일 때, 기대 결과 : %s', (input, expected) => {
      const result = isValidCarName(input);
      expect(result).toBe(expected);
    });
  });

  // isValidGameAttempts
  // 경주 시도는 1회 이상 5회 이하라는 기준
  describe('경주 시도 횟수 검증', () => {
    test.each([
      [1, true],
      [5, true],
      [10, true],
      [0, VALIDATION_ERROR_MESSAGE.GAME_ATTEMPT_OUT_OF_RAGNE],
      [11, VALIDATION_ERROR_MESSAGE.GAME_ATTEMPT_OUT_OF_RAGNE],
      [-1, VALIDATION_ERROR_MESSAGE.GAME_ATTEMPT_OUT_OF_RAGNE],
      [3.5, VALIDATION_ERROR_MESSAGE.GAME_ATTEMPT_OUT_OF_RAGNE],
      ['5', VALIDATION_ERROR_MESSAGE.GAME_ATTEMPT_OUT_OF_RAGNE],
      [null, VALIDATION_ERROR_MESSAGE.GAME_ATTEMPT_OUT_OF_RAGNE],
      [undefined, VALIDATION_ERROR_MESSAGE.GAME_ATTEMPT_OUT_OF_RAGNE],
    ])('게임 시도 횟수: "%s" 일 때, 기대 결과: %s', (gameAttempt, expected) => {
      const result = inputValidation.isValidGameAttempts(gameAttempt);
      expect(result).toBe(expected);
    });
  });
});
