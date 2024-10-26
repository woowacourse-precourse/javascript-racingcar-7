const PRINT_MESSAGE = {
  INPUT_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_MOVE_ATTEMPT_COUNT: '시도할 횟수는 몇 회인가요?\n',
  EXECUTION_RESULT: '\n실행 결과',
  WINNERS: '최종 우승자 : ',
};

const ERROR_MESSAGE = {
  INVALID_NAME_LENGTH: '[ERROR] 자동차 이름은 2자 이상, 5자 이하만 가능합니다.',
  DUPLICATE_NAME: '[ERROR] 자동차 이름은 중복될 수 없습니다.',
  CARS_LESS_THAN_TWO:
    '[ERROR] 자동차는 최소 2대 이상이어야 하고, 쉼표(,)로 구분해야 합니다.',
  ONLY_SYMBOL_AND_NUMBER:
    '[ERROR] 자동차 이름은 영문이나 한글이 포함되어야 합니다.',
  NOT_A_NUMBER: '[ERROR] 시도할 횟수는 숫자만 가능합니다.',
  NOT_AN_INTEGER: '[ERROR] 시도할 횟수는 정수만 가능합니다.',
  NOT_IN_RANGE: '[ERROR] 시도할 횟수는 1 이상 10 이하만 가능합니다.',
};

export { PRINT_MESSAGE, ERROR_MESSAGE };
