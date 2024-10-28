export const MESSAGE = Object.freeze({
  PROMPT_NAME_USER_INPUT:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  PROMPT_COUNT_USER_INPUT: '시도할 횟수는 몇 회인가요?',
  EXECUTE_OUTPUT: '실행 결과',
  FINAL_OUTPUT: '최종 우승자',
});

export const ERROR_MESSAGE = Object.freeze({
  EMPTY_INPUT: '[ERROR] 입력값이 없습니다.',
  NAME_TOO_LONG: '[ERROR] 이름은 5자 이하로 입력해야 합니다.',
  DUPLICATE_NAME: '[ERROR] 자동차 이름은 중복될 수 없습니다.',
  INVALID_TRY_COUNT: '[ERROR] 시도 횟수는 양수여야 합니다.',
});

export const RANGE = Object.freeze({
  START: 0,
  END: 9,
  VALID: 4,
});

export const MAX_INPUT_LENGTH = 5;
