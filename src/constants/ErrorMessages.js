const ErrorMessages = {
  CAR_COUNT_INVALID: '[ERROR] 자동차의 수는 2대 이상 10대 이하여야 한다.',
  CAR_NAME_LENGTH: '[ERROR] 자동차의 이름은 1글자 이상 5글자 이하여야 한다.',
  CAR_NAME_FORMAT: '[ERROR] 자동차의 이름은 한글, 영어, 숫자로 이루어져야 한다.',
  CAR_NAME_DUPLICATE: '[ERROR] 자동차의 이름은 중복되면 안 된다.',
  ROUND_NOT_NUMERIC: '[ERROR] 시도할 횟수는 숫자로 입력해야 한다.',
  ROUND_NOT_INTEGER: '[ERROR] 시도할 횟수는 정수로 입력해야 한다.',
  ROUND_OUT_OF_RANGE: '[ERROR] 시도할 횟수는 1회 이상 50회 이하로 입력해야 한다.'
}

export default ErrorMessages;