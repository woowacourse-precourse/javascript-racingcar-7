export const INPUT_MESSAGE = {
  NAME_INPUT: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  COUNT_INPUT: '시도할 횟수는 몇 회인가요?\n',
};

export const ERROR_MESSAGE = {
  NOTHING: '[ERROR] 입력되지 않았습니다.',
  DEFICIENCY: '[ERROR] 입력된 자동차가 2대 미만입니다.',
  DUPLICATION: '[ERROR] 중복된 자동차 이름이 존재합니다.',
  EMPTY: '[ERROR] 자동차 이름이 입력되지 않은 부분이 있습니다.',
  OVER_LENGTH: '[ERROR] 자동차 이름이 6글자 이상입니다.',
  NOT_NUMBER: '[ERROR] 숫자가 아닙니다.',
  NOT_INTEGER: '[ERROR] 정수가 아닙니다.',
  SMALL_NUMBER: '[ERROR] 1 미만의 숫자입니다.',
};

export const RESULT_STATUS = {
  PROGRESS: '\n실행 결과',
  SIGN: '-',
  WINNERS: '최종 우승자 : ',
};

export const RACE_NUMBER = {
  MIN_ARR_LENGTH: 2,
  MAX_NAME_LENGTH: 5,
  MIN_RANDOM_NUMBER: 0,
  MAX_RANDOM_NUMBER: 9,
};