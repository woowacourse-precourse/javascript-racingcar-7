import { VALIDATION_ERROR_MESSAGE } from '../src/constants/constants';
import * as validator from '../src/validations/InputValidation';

describe('Input Validation 테스트', () => {
  // isEmptyStringIncluded
  // 입력값이 빈 문자열, 공란 등을 포함했는지만 검증
  describe('isEmptyStringIncluded 검증', () => {
    // 정상적인 입력에 대한 테스트
    test.each([
      ['pobi,woni', true],
      ['test1,test2', true],
      ['apple,banana,pineapple', true],
      ['1233,1142,1253216', true],
      ['1', true],
    ])('입력 "%s" 일 때, 기대 결과 : %s', (input, expected) => {
      const result = validator.isEmptyStringIncluded(input);
      expect(result).toBe(expected);
    });

    // 에러가 예상되는 입력에 대한 테스트
    test.each([
      ['pobi, woni', VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
      [null, VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
      [undefined, VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
      ['', VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
      ['   ', VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
    ])('입력 "%s" 일 때, 에러 메시지 : %s', (input, expectedError) => {
      expect(() => validator.isEmptyStringIncluded(input)).toThrow(
        expectedError,
      );
    });
  });

  // isValidCarName
  // 자동차 이름은 1~5글자의 영문대소문자, 숫자, 하이픈('-'), 언더스코어('_')라는 규칙
  describe('isValidCarName 검증', () => {
    // 정상적인 입력에 대한 테스트
    test.each([
      ['pobi', true],
      ['woni', true],
      ['crong', true],
      ['hoit', true],
    ])('입력 "%s" 일 때, 기대 결과 : %s', (input, expected) => {
      const result = validator.isValidCarName(input);
      expect(result).toBe(expected);
    });

    // 에러가 예상되는 입력에 대한 테스트
    test.each([
      ['pobi!', VALIDATION_ERROR_MESSAGE.INVALID_NAME_FORMAT],
      ['po@bi', VALIDATION_ERROR_MESSAGE.INVALID_NAME_FORMAT],
      ['pobiiii', VALIDATION_ERROR_MESSAGE.NAME_LENGTH_OUT_OF_RANGE],
    ])('입력 "%s" 일 때, 에러 메시지 : %s', (input, expectedError) => {
      expect(() => validator.isValidCarName(input)).toThrow(expectedError);
    });
  });

  // isValidInteger
  // 입력한 값이 정수인지 검증하는 로직 태스트
  describe('isPositiveInteger 검증', () => {
    // 정상적인 입력에 대한 테스트
    test.each([
      ['1', true],
      ['5', true],
      ['20', true],
      ['3020', true],
      ['00001', true],
    ])('입력 "%s" 일 때, 기대 결과: %s', (input, expected) => {
      const result = validator.isPositiveInteger(input);
      expect(result).toBe(expected);
    });

    // 에러가 예상되는 입력에 대한 테스트
    test.each([
      ['0', VALIDATION_ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER],
      ['-10', VALIDATION_ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER],
      ['0.001', VALIDATION_ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER],
      ['-1', VALIDATION_ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER],
      ['3.5', VALIDATION_ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER],
      ['five', VALIDATION_ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER],
      ['2**0.5', VALIDATION_ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER],
    ])('입력 "%s" 일 때, 에러 메시지: %s', (input, expectedError) => {
      expect(() => validator.isPositiveInteger(input)).toThrow(expectedError);
    });
  });

  // isValidGameAttempts
  // 경주 시도는 1회 이상 5회 이하라는 기준
  describe('isValidGameAttempts 검증', () => {
    // 정상적인 입력에 대한 테스트
    test.each([
      [1, true],
      [5, true],
    ])('게임 시도 횟수: "%s" 일 때, 기대 결과: %s', (gameAttempt, expected) => {
      const result = validator.isValidGameAttempts(gameAttempt);
      expect(result).toBe(expected);
    });

    // 에러가 예상되는 입력에 대한 테스트
    test.each([
      [10, VALIDATION_ERROR_MESSAGE.GAME_ATTEMPT_OUT_OF_RAGNE],
      [0, VALIDATION_ERROR_MESSAGE.GAME_ATTEMPT_OUT_OF_RAGNE],
      [-1, VALIDATION_ERROR_MESSAGE.GAME_ATTEMPT_OUT_OF_RAGNE],
    ])(
      '게임 시도 횟수: "%s" 일 때, 에러 메시지: %s',
      (gameAttempt, expectedError) => {
        expect(() => validator.isValidGameAttempts(gameAttempt)).toThrow(
          expectedError,
        );
      },
    );
  });

  //isValidParticipantAmount
  // 참여자는 2명 이상 5명 이하 기준
  describe('isValidParticipantAmount', () => {
    // 유효한 참가자 수 입력에 대한 테스트
    describe('유효한 참가자 수 입력', () => {
      test.each([
        ['pobi,woni', true],
        ['pobi,woni,crong', true],
        ['pobi,woni,crong,hoit,ingoo', true],
      ])('입력 "%s" 일 때, 기대 결과: %s', (input, expected) => {
        const result = validator.isValidParticipantAmount(input);
        expect(result).toBe(expected);
      });
    });

    // 유효하지 않은 참가자 수 입력에 대한 테스트
    describe('유효하지 않은 참가자 수 입력', () => {
      test.each([
        ['pobi', VALIDATION_ERROR_MESSAGE.PARTICIPANT_COUNT_OUT_OF_RANGE],
        [
          'pobi,woni,crong,hoit,ingoo,jerry',
          VALIDATION_ERROR_MESSAGE.PARTICIPANT_COUNT_OUT_OF_RANGE,
        ],
      ])('입력 "%s" 일 때, 에러 메시지: %s', (input, expectedError) => {
        expect(() => validator.isValidParticipantAmount(input)).toThrow(
          expectedError,
        );
      });
    });
  });
});
