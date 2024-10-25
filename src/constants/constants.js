export const FORWARD_SYMBOL = '-';
export const RACE_MAX_NUM = 100;

export const INPUT_MESSAGES = {
  CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  RACE_COUNT: '시도할 횟수는 몇 회인가요?\n',
}

export const OUTPUT_MESSAGES = {
  RACE_RESULT: '\n실행 결과',
  WINNER: '최종 우승자 : ',
  ERROR: '[ERROR]',
}

export const COMMON_ERROR_MESSAGES = {
  READ_INPUT: '입력을 처리하는 도중 문제가 발생했습니다. 다시 시도해주세요.',
};

export const CAR_NAME_VALIDATION_ERROR = {
  IS_NOT_STRING: '입력 값이 문자열이 아닙니다. 문자열로 입력해주세요.',
  IS_EMPTY: '입력 값이 비어 있습니다. 값을 입력해주세요.',
  IS_TOO_LONG: '입력 값이 너무 깁니다. 5자 이하로 입력해주세요.',
  IS_DUPLICATE: '입력 값들 중 중복되는 값이 존재합니다. 다시 입력해주세요.',
};

export const RACE_COUNT_VALIDATION_ERROR = {
  IS_NOT_NUM: '입력 값이 숫자가 아닙니다. 숫자로 입력해주세요.',
  IS_NOT_POSITIVE_INTEGER: '입력 값이 양의 정수가 아닙니다. 양의 정수로 입력해주세요.',
  IS_EXCEEDING_MAX: `입력 값이 최대 시도 횟수를 초과하였습니다. ${RACE_MAX_NUM}보다 작은 값으로 입력해주세요.`,
};