import ERROR_MESSAGES from '../../src/constants/errorMessages.js';
import { MAX_ROUNDS } from '../../src/constants/numbers.js';
import {
  checkCarNames,
  validateRoundCount,
} from '../../src/validators/validator.js';

describe('자동차 이름 유효성 검사', () => {
  const testCases = [
    {
      description: '자동차 이름이 5자 이하일 경우 통과한다.',
      input: ['Benz', 'BMW'],
      expectedError: undefined,
    },
    {
      description: '자동차 이름이 5자를 초과할 경우 에러가 발생한다.',
      input: ['Volvo', 'Lamborghini'],
      expectedError: ERROR_MESSAGES.NAME_LENGTH_EXCEEDED,
    },
    {
      description: '자동차 이름에 빈 문자열이 포함된 경우 에러가 발생한다.',
      input: ['Benz', ''],
      expectedError: ERROR_MESSAGES.NAME_EMPTY,
    },
    {
      description:
        '자동차 이름에 숫자 또는 특수 문자가 포함된 경우 에러가 발생한다.',
      input: ['!1234', 'BMW'],
      expectedError: ERROR_MESSAGES.NAME_INVALID_CHARACTERS,
    },
    {
      description: '중복된 이름이 있을 경우 에러가 발생한다.',
      input: ['Benz', 'Benz'],
      expectedError: ERROR_MESSAGES.NAME_DUPLICATE,
    },
    {
      description: '자동차가 2대 미만일 경우 에러가 발생한다.',
      input: ['Benz'],
      expectedError: ERROR_MESSAGES.MINIMUM_CARS,
    },
  ];

  test.each(testCases)('$description', ({ input, expectedError }) => {
    if (expectedError) {
      expect(() => checkCarNames(input).toThrow(expectedError));
    }
    expect(() => checkCarNames(input).not.toThrow(expectedError));
  });
});

describe('게임 시도 횟수 유효성 검사', () => {
  const testCases = [
    {
      description: '양의 정수 입력 시 통과한다.',
      input: '5',
      expectedError: undefined,
    },
    {
      description: '음수 입력 시 에러가 발생한다.',
      input: '-1',
      expectedError: ERROR_MESSAGES.POSITIVE_INTEGER_REQUIRED,
    },
    {
      description: '0 입력 시 에러가 발생한다.',
      input: '0',
      expectedError: ERROR_MESSAGES.POSITIVE_INTEGER_REQUIRED,
    },
    {
      description: '실수 입력 시 에러가 발생한다.',
      input: '3.5',
      expectedError: ERROR_MESSAGES.POSITIVE_INTEGER_REQUIRED,
    },
    {
      description: '숫자가 아닌 입력이 들어오면 에러가 발생한다.',
      input: 'abc',
      expectedError: ERROR_MESSAGES.INVALID_NUMBER_INPUT,
    },
    {
      description: '최대 시도 횟수를 초과하면 에러가 발생한다.',
      input: `${MAX_ROUNDS + 1}`,
      expectedError: ERROR_MESSAGES.ROUND_LIMIT_EXCEEDED(MAX_ROUNDS),
    },
  ];

  test.each(testCases)('$description', ({ input, expectedError }) => {
    if (expectedError) {
      expect(() => validateRoundCount(input).toThrow(expectedError));
    }
    expect(() => validateRoundCount(input).not.toThrow(expectedError));
  });
});
