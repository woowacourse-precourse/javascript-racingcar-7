import InputValidator from "../src/utils/InputValidator.js";
import { ERROR_MESSAGE } from "../src/static/Static.js";

describe('InputValidator 테스트', () => {
  describe('자동차 이름 유효성 검사', () => {
    test('잘못된 입력값 에러', () => {
      const testCases = [
        {
          input: '',
          expectedError: ERROR_MESSAGE.nameInputError
        },
        {
          input: 'pobi,,woni',
          expectedError: ERROR_MESSAGE.nameInputError
        },
        {
          input: 'pobi,pobi,woni',
          expectedError: ERROR_MESSAGE.nameDuplicateError
        },
        {
          input: 'pobi',
          expectedError: ERROR_MESSAGE.nameInputError
        }
      ];
      
      testCases.forEach(({input, expectedError}) => {
        expect(() => InputValidator.validateCarNames(input))
          .toThrow(expectedError);
      });
    });
  });

  describe('시도 횟수 유효성 검사', () => {
    test('잘못된 시도 횟수 입력', () => {
      const testCases = [
        {
          input: '',
          expectedError: ERROR_MESSAGE.triesNumberError
        },
        {
          input: 'abc',
          expectedError: ERROR_MESSAGE.triesNumberError
        },
        {
          input: '0',
          expectedError: ERROR_MESSAGE.triesZeroError
        }
      ];
      
      testCases.forEach(({input, expectedError}) => {
        expect(() => InputValidator.validateAttempts(input))
          .toThrow(expectedError);
      });
    });
  });
});