// tests/InputValidation.test.js
import { VALIDATION_ERROR_MESSAGE } from '../src/constants/constants.js';
import * as validator from '../src/validations/InputValidation.js';

describe('Input Validation 테스트', () => {
  // validateInputStrings
  // 입력값이 비어있지 않고 공백이 포함되지 않았는지 검증
  describe('validateInputStrings 검증', () => {
    // 정상적인 입력에 대한 테스트
    test.each([
      ['pobi,woni'],
      ['test1,test2'],
      ['apple,banana,pineapple'],
      ['1233,1142,1253216'],
      ['1'],
    ])('입력 "%s" 일 때, 검증을 통과해야 합니다.', (input) => {
      expect(() => validator.validateInputStrings(input)).not.toThrow();
    });

    // 에러가 예상되는 입력에 대한 테스트
    test.each([
      ['pobi, woni', VALIDATION_ERROR_MESSAGE.INCLUDE_WHITESPACE],
      [null, VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
      [undefined, VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
      ['', VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
      ['   ', VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE],
    ])('입력 "%s" 일 때, 에러 메시지: %s', (input, expectedError) => {
      expect(() => validator.validateInputStrings(input)).toThrow(
        expectedError,
      );
    });
  });

  // validateCarName
  // 자동차 이름은 1~5글자의 영문대소문자, 숫자, 하이픈('-'), 언더스코어('_')로 구성
  describe('validateCarName 검증', () => {
    // 정상적인 입력에 대한 테스트
    test.each([['pobi'], ['woni'], ['crong'], ['ho_it'], ['car-1']])(
      '입력 "%s" 일 때, 검증을 통과해야 합니다.',
      (input) => {
        expect(() => validator.validateCarName(input)).not.toThrow();
      },
    );

    // 에러가 예상되는 입력에 대한 테스트
    test.each([
      ['pobi!', VALIDATION_ERROR_MESSAGE.INVALID_NAME_FORMAT],
      ['po@bi', VALIDATION_ERROR_MESSAGE.INVALID_NAME_FORMAT],
      ['pobiiii', VALIDATION_ERROR_MESSAGE.NAME_LENGTH_OUT_OF_RANGE],
      ['', VALIDATION_ERROR_MESSAGE.INVALID_NAME_FORMAT],
    ])('입력 "%s" 일 때, 에러 메시지: %s', (input, expectedError) => {
      expect(() => validator.validateCarName(input)).toThrow(expectedError);
    });
  });

  // validateGameAttempts
  // 경주 시도 횟수가 양의 정수이고 지정된 범위 내에 있는지 검증
  describe('validateGameAttempts 검증', () => {
    // 정상적인 입력에 대한 테스트
    test.each([['1'], ['5']])(
      '입력 "%s" 일 때, 검증을 통과해야 합니다.',
      (input) => {
        expect(() => validator.validateGameAttempts(input)).not.toThrow();
      },
    );

    // 에러가 예상되는 입력에 대한 테스트
    test.each([
      ['0', VALIDATION_ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER],
      ['-1', VALIDATION_ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER],
      ['10', VALIDATION_ERROR_MESSAGE.GAME_ATTEMPT_OUT_OF_RANGE],
      ['abc', VALIDATION_ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER],
      ['3.5', VALIDATION_ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER],
    ])('입력 "%s" 일 때, 에러 메시지: %s', (input, expectedError) => {
      expect(() => validator.validateGameAttempts(input)).toThrow(
        expectedError,
      );
    });
  });

  // validateParticipants
  // 참여자 수가 지정된 범위 내에 있는지 검증
  describe('validateParticipants 검증', () => {
    // 유효한 참가자 수 입력에 대한 테스트
    test.each([
      [['pobi', 'woni']],
      [['pobi', 'woni', 'crong']],
      [['pobi', 'woni', 'crong', 'hoit', 'ingoo']],
    ])('입력 "%s" 일 때, 검증을 통과해야 합니다.', (names) => {
      expect(() => validator.validateParticipants(names)).not.toThrow();
    });

    // 유효하지 않은 참가자 수 입력에 대한 테스트
    test.each([
      [['pobi'], VALIDATION_ERROR_MESSAGE.PARTICIPANT_COUNT_OUT_OF_RANGE],
      [
        ['pobi', 'woni', 'crong', 'hoit', 'ingoo', 'jerry'],
        VALIDATION_ERROR_MESSAGE.PARTICIPANT_COUNT_OUT_OF_RANGE,
      ],
    ])('입력 "%s" 일 때, 에러 메시지: %s', (names, expectedError) => {
      expect(() => validator.validateParticipants(names)).toThrow(
        expectedError,
      );
    });
  });
});
