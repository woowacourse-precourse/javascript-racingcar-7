export const GAME_PROGRESS_MESSAGE = Object.freeze({
  ENTER_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  ENTER_TRIAL_COUNT: '시도할 횟수는 몇 회인가요?',
  EXECUTION_RESULT: '실행 결과',
  FINAL_WINNER: '최종 우승자',
});

export const ERROR_MESSAGE = Object.freeze({
  NO_WHITESPACE: '입력값에 공백이 포함되어서는 안 됩니다.',
  INVALID_SEPARATOR: '쉼표(,) 외의 다른 구분자를 사용할 수 없습니다.',
  MAX_LENGTH_EXCEEDED: '자동차 이름은 5자 이하만 가능합니다.',
  INVALID_CHARACTERS: '자동차 이름은 문자만 포함해야 합니다.',
  NON_POSITIVE_NUMBER: '시도할 횟수는 양수여야 합니다.',
});
