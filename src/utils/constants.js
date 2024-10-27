export const ERROR_MESSAGES = {
  NO_CARS: '자동차가 최소 1대 이상 있어야 합니다.',
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
  NO_CARS: {
    input: '',
    errorMessage: `${OUTPUT_MESSAGES.ERROR_PREFIX} ${ERROR_MESSAGES.NO_CARS}`,
  },
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
