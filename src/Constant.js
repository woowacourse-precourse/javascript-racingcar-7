const RandomConstant = {
  MAX: 9,
  MIN: 0,
  THRESHOLD: 4,
}

const NAME_MIN_LENGTH = 1;
const NAME_MAX_LENGTH = 5;
const ZERO = 0;

const RESULT_PREFIX = '최종 우승자 : ';

const EMPTY_STRING = '';
const ERROR_PREFIX = '[ERROR] ';

const Delimiters = {
  COMMA: ',',
  COMMA_SPACE: ', '
}

const HYPHEN = '-';

const InputMessages = {
  TIMES_MESSAGE: '시도할 횟수는 몇 회인가요?\n',
  CARS_MESSAGE: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
};

const ErrorMessages = {
  INVALID_CAR_NAMES_ERROR: ERROR_PREFIX + '유효한 자동차 이름이 아닙니다.',
  INVALID_TIMES_ERROR: ERROR_PREFIX + '시도할 횟수는 양의 정수만 가능합니다.',
};

export { ErrorMessages, InputMessages, RESULT_PREFIX, EMPTY_STRING, RandomConstant, NAME_MAX_LENGTH, NAME_MIN_LENGTH, Delimiters, HYPHEN, ZERO };