export const ERROR_MESSAGES = {
  EMPTY_NAME: '자동차 이름은 빈 문자열이나 공백일 수 없습니다.',
  NAME_TOO_LONG: '자동차 이름은 5자 이하만 가능합니다.',
  DUPLICATE_NAME: '자동차 이름은 중복될 수 없습니다.',

  EMPTY_ROUNDS: '시도 횟수는 빈 값이나 공백일 수 없습니다.',
  NOT_A_NUMBER: '시도 횟수는 숫자여야 합니다.',
  NEGATIVE_NUMBER: '시도 횟수는 음수일 수 없습니다.',
  ZERO_ROUNDS: '시도 횟수는 0일 수 없습니다.',
  NOT_INTEGER: '시도 횟수는 정수여야 합니다.',
  OVERFLOW: `시도 횟수는 ${Number.MAX_SAFE_INTEGER}보다 작거나 같아야 합니다.`,
};

export const INPUT_MESSAGES = {
  CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  GAME_ROUNDS: '시도할 횟수는 몇 회인가요?\n',
};

export const OUTPUT_MESSAGES = {
  GAME_START: '\n실행 결과',
  WINNERS_PREFIX: '최종 우승자 : ',
  ERROR_PREFIX: '[ERROR]',
};

export const CAR_NAME_TEST_CASES = {
  EMPTY_NAME: {
    input: ['pobi', ''],
    errorMessage: `${OUTPUT_MESSAGES.ERROR_PREFIX} ${ERROR_MESSAGES.EMPTY_NAME}`,
  },
  EMPTY_NAME_WITH_SPACE: {
    input: ['pobi', ' '],
    errorMessage: `${OUTPUT_MESSAGES.ERROR_PREFIX} ${ERROR_MESSAGES.EMPTY_NAME}`,
  },
  NAME_TOO_LONG: {
    input: ['pobi', 'abcdef'],
    errorMessage: `${OUTPUT_MESSAGES.ERROR_PREFIX} ${ERROR_MESSAGES.NAME_TOO_LONG}`,
  },
  DUPLICATE_NAME: {
    input: ['pobi', 'jason', 'pobi'],
    errorMessage: `${OUTPUT_MESSAGES.ERROR_PREFIX} ${ERROR_MESSAGES.DUPLICATE_NAME}`,
  },
  VALID_NAMES: {
    input: ['pobi', 'woni', 'jun'],
    expected: ['pobi', 'woni', 'jun'],
  },
};

export const GAME_ROUNDS_TEST_CASES = {
  EMPTY_ROUNDS: {
    input: '',
    errorMessage: `${OUTPUT_MESSAGES.ERROR_PREFIX} ${ERROR_MESSAGES.EMPTY_ROUNDS}`,
  },
  EMPTY_ROUNDS_WITH_SPACE: {
    input: ' ',
    errorMessage: `${OUTPUT_MESSAGES.ERROR_PREFIX} ${ERROR_MESSAGES.EMPTY_ROUNDS}`,
  },
  NOT_A_NUMBER: {
    input: 'abc',
    errorMessage: `${OUTPUT_MESSAGES.ERROR_PREFIX} ${ERROR_MESSAGES.NOT_A_NUMBER}`,
  },
  NEGATIVE_NUMBER: {
    input: '-1',
    errorMessage: `${OUTPUT_MESSAGES.ERROR_PREFIX} ${ERROR_MESSAGES.NEGATIVE_NUMBER}`,
  },
  ZERO_ROUNDS: {
    input: '0',
    errorMessage: `${OUTPUT_MESSAGES.ERROR_PREFIX} ${ERROR_MESSAGES.ZERO_ROUNDS}`,
  },
  NOT_INTEGER: {
    input: '1.5',
    errorMessage: `${OUTPUT_MESSAGES.ERROR_PREFIX} ${ERROR_MESSAGES.NOT_INTEGER}`,
  },
  OVERFLOW: {
    input: String(Number.MAX_SAFE_INTEGER + 1),
    errorMessage: `${OUTPUT_MESSAGES.ERROR_PREFIX} ${ERROR_MESSAGES.OVERFLOW}`,
  },
  VALID_NUMBER: {
    input: '5',
    expected: 5,
  },
};

export const TEST_DESCRIPTIONS = {
  MAIN: '자동차 경주',
  BASE: {
    FEATURE: '기능 테스트',
    EXCEPTION: '예외 테스트',
  },
  CAR_NAME: {
    GROUP: '자동차 이름 검증',
    CASES: [
      ['자동차 이름이 빈 문자열인 경우 에러 발생', 'EMPTY_NAME'],
      ['자동차 이름이 공백인 경우 에러 발생', 'EMPTY_NAME_WITH_SPACE'],
      ['자동차 이름이 5자를 초과하는 경우 에러 발생', 'NAME_TOO_LONG'],
      ['중복된 자동차 이름이 있는 경우 에러 발생', 'DUPLICATE_NAME'],
    ],
  },
  GAME_ROUNDS: {
    GROUP: '시도 횟수 검증',
    CASES: [
      ['시도 횟수가 빈 값이 입력된 경우 에러 발생', 'EMPTY_ROUNDS'],
      ['시도 횟수가 공백인 경우 에러 발생', 'EMPTY_ROUNDS_WITH_SPACE'],
      ['시도 횟수가 숫자가 아닌 값이 입력된 경우 에러 발생', 'NOT_A_NUMBER'],
      ['시도 횟수가 음수가 입력된 경우 에러 발생', 'NEGATIVE_NUMBER'],
      ['시도 횟수가 0이 입력된 경우 에러 발생', 'ZERO_ROUNDS'],
      ['시도 횟수가 소수가 입력된 경우 에러 발생', 'NOT_INTEGER'],
      [
        '시도 횟수가 오버플로우를 발생시키는 값이 입력된 경우 에러 발생',
        'OVERFLOW',
      ],
    ],
  },
};
