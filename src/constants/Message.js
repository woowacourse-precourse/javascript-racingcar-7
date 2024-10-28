export const GAME_MESSAGE = Object.freeze({
  INPUT_CAR_NAME:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_ATTEMPT: '시도할 횟수는 몇 회인가요?\n',
  EXECUTION_RESULT: '\n실행 결과',
  WINNERS: '최종 우승자 : ',
});

export const ERROR_MESSAGE = Object.freeze({
  EMPTY_CAR_NAME: '[ERROR] 자동차 이름에 공백만 입력하시면 안됩니다.',
  SPACE_IN_CAR_NAME: '[ERROR] 자동차 이름에 공백이 포함되면 안됩니다.',
  DUPLICATE_CAR_NAME: '[ERROR] 자동차 이름은 중복되선 안됩니다.',
  INVALID_CAR_NAME_LENGTH: '[ERROR] 자동차 이름은 5자 이하여야 합니다.',
  LESS_THAN_TWO_CARS: '[ERROR] 자동차는 2대 이상이어야 합니다.',
  EMPTY_ATTEMPT: '[ERROR] 시도 횟수에 공백만 입력하시면 안됩니다.',
  NOT_A_NUMBER: '[ERROR] 숫자가 아닌 값을 입력하시면 안됩니다.',
  NOT_AN_INTEGER: '[ERROR] 시도할 횟수에 실수를 입력하시면 안됩니다.',
  LESS_THAN_ONE: '[ERROR] 시도할 횟수는 1 이상이어야 합니다.',
});
