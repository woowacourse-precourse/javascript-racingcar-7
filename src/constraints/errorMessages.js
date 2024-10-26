const ERROR_MESSAGES = {
  CAR_NAME_IS_EMPTY: '[ERROR] 자동차 이름 중 빈 문자열이 있습니다.',
  DUPLICATE_NAME: '[ERROR] 이름이 중복됩니다.',
  MINIMUM_CARS: '[ERROR] 자동차가 2대 미만입니다.',
  LONG_NAME: '[ERROR] 자동차 이름의 길이가 5보다 깁니다.',
  TRY_COUNT_IS_EMPTY: '[ERROR] 시도횟수가 빈 문자열입니다.',
  NOT_NUMBER: '[ERROR] 숫자로 변환될 수 없습니다.',
  NOT_INTEGER: '[ERROR] 정수로 변환될 수 없습니다.',
  TRY_COUNT_IS_NOT_POSITIVE: '[ERROR] 시도 횟수가 1미만입니다.',
  NO_WINNERS: '[ERROR] 최종 우승자가 없습니다.',
};

Object.freeze(ERROR_MESSAGES);
export default ERROR_MESSAGES;
