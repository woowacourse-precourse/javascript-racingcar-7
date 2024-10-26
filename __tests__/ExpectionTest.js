import App from '../src/App.js';

import { ERROR_PREFIX, ERROR_MESSAGES } from '../src/Model/Error.js';
import { mockQuestions } from '../src/Test/Test.js';

// Test cases for winners

// Test cases for exceptions
const exceptionTestCases = [
  {
    description: '이름이 공백일 경우 예외 처리 테스트',
    inputs: ['pobi, ,woni'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.names.EMPTY_NAME}`,
  },
  {
    description: '이름이 중복일 경우 예외 처리 테스트',
    inputs: ['포비,포비'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.names.DUPLICATED_NAMES}`,
  },
  {
    description: '한글이름이 길이 5 초과일 경우 예외 처리 테스트',
    inputs: ['포비라이온즈'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.names.NAME_TOO_LONG}`,
  },
  {
    description: '일본어 이름이 길이 5 초과일 경우 예외 처리 테스트',
    inputs: ['さくらんぼの実'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.names.NAME_TOO_LONG}`,
  },

  {
    description: '이모지 이름이 길이 5 초과일 경우 예외 처리 테스트',
    inputs: ['🥰🥰🥰🙂🥰🥰'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.names.NAME_TOO_LONG}`,
  },
  {
    description: '시도 횟수가 0일 때 예외 처리 테스트',
    inputs: ['pobi,woni,honux', '0'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED}`,
  },
  {
    description: '빈 이름을 입력할 경우 예외 처리 테스트',
    inputs: [''],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.names.EMPTY_NAME}`,
  },
  {
    description: '시도 횟수가 음수일 경우 예외 처리 테스트',
    inputs: ['pobi,woni,honux', '-3'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED}`,
  },
  {
    description: '이름에 공백만 포함될 경우 예외 처리 테스트',
    inputs: [' , , '],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.names.EMPTY_NAME}`,
  },
  {
    description: '시도 횟수가 숫자가 아닌 문자열일 경우 예외 처리 테스트',
    inputs: ['pobi,woni,honux', 'three'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED}`,
  },
  {
    description: '이름에 길이가 너무 긴 경우 예외 처리 테스트',
    inputs: ['pobi12345678901234567890,woni,honux'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.names.NAME_TOO_LONG}`,
  },
  {
    description: '쉼표로만 구분된 빈 이름들이 입력될 경우 예외 처리 테스트',
    inputs: [',,'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.names.CONSECUTIVE_DELIMITERS}`,
  },
  {
    description: '시도 횟수가 소수일 경우 예외 처리 테스트',
    inputs: ['pobi,woni,honux', '3.5'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED}`,
  },
  {
    description: '시도 횟수가 공백일 경우 예외 처리 테스트',
    inputs: ['pobi,woni,honux', ' '],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED}`,
  },
  {
    description: '시도 횟수가 5a일 경우 예외 처리 테스트',
    inputs: ['pobi,woni,honux', '5a'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED}`,
  },
  {
    description: '시도 횟수가 0일 경우 예외 처리 테스트',
    inputs: ['pobi,woni,honux', '0'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED}`,
  },
  {
    description: '시도 횟수가 -1일 경우 예외 처리 테스트',
    inputs: ['pobi,woni,honux', '-1'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED}`,
  },
  {
    description: '시도 횟수가 1.5일 경우 예외 처리 테스트',
    inputs: ['pobi,woni,honux', '1.5'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED}`,
  },
  {
    description: '시도 횟수가 " 123"일 경우 예외 처리 테스트',
    inputs: ['pobi,woni,honux', ' 123'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED}`,
  },
  {
    description: '시도 횟수가 "123 "일 경우 예외 처리 테스트',
    inputs: ['pobi,woni,honux', '123 '],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED}`,
  },
  {
    description: '시도 횟수가 5a일 경우 예외 처리 테스트',
    inputs: ['pobi,woni,honux', '5a'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED}`,
  },
  {
    description: '시도 횟수가 abc일 경우 예외 처리 테스트',
    inputs: ['pobi,woni,honux', 'abc'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED}`,
  },
  {
    description: '시도 횟수가 1e2일 경우 예외 처리 테스트',
    inputs: ['pobi,woni,honux', '1e2'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED}`,
  },
  {
    description: '시도 횟수가 Infinity일 경우 예외 처리 테스트',
    inputs: ['pobi,woni,honux', 'Infinity'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED}`,
  },
  {
    description: '시도 횟수가 NaN일 경우 예외 처리 테스트',
    inputs: ['pobi,woni,honux', 'NaN'],
    expectedError: `${ERROR_PREFIX}${ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED}`,
  },
];

describe('자동차 경주 추가 테스트', () => {
  test.each(exceptionTestCases)(
    '$description',
    async ({ inputs, expectedError }) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow(expectedError);
    },
  );
});
