export const USER = Object.freeze({
  INPUT_CAR_NAME:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
  RACE_RESULT_BEFORE_MESSAGE: '\n실행 결과',
});

export const ERROR = Object.freeze({
  HEADER: '[ERROR] ',
  NAMES_IS_NOT_EMPTY: '자동차의 이름을 입력해주세요!',
  NAME_IS_NOT_EMPTY: '각 자동차의 이름들은 공백이 안되게 입력해주세요!',
  NAME_IS_MAX_FIVE: '각 자동차의 이름은 5자리 이하로 입력해주세요!',
  NAME_IS_NOT_SPACE: '각 자동차의 이름은 공백이 포함 안되게 입력해주세요!',
  NAME_IS_NOT_SAME:
    '각 자동차의 이름은 헷갈리지 않게 중복이 안되게 입력해주세요!',
  COUNT_IS_NOT_EMPTY: '시도 횟수를 입력해주세요!',
  COUNT_IS_NOT_PRIME_NUMBER: '시도 횟수는 소수점이 아닌 양수로만 입력해주세요!',
  COUNT_IS_NUMBER: '시도 횟수는 숫자만 입력해주세요!',
  COUNT_IS_POSITIVE_NUMBER: '시도 횟수는 1 이상으로 입력해주세요!',
});
