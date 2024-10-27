const SYSTEM_MESSAGE = {
  ENTER_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ENTER_COUNT: '시도할 회수는 몇 회인가요?\n',
  RESULT: '\n실행 결과',
  WINNER: '최종 우승자 :',
};

const ERROR_MESSAGE = {
  INVALID_LENGTH: '[ERROR] 이름은 1자 이상, 5자 이하만 가능합니다.',
  INVALID_DUPLICATE: '[ERROR] 중복된 이름이 존재합니다.',
  INVALID_CHARACTER: '[ERROR] 이름은 알파벳만 입력 가능합니다.',
  INVALID_NUMBER: '[ERROR] 숫자만 입력해주세요.',
  INVALID_RANGE: '[ERROR] 1 이상의 숫자만 입력해주세요.',
  INVALID_INTEGER: '[ERROR] 정수만 입력해주세요.',
};

const FORWARD_DASH = '-';

const EMPTY_STRING = '';

export { SYSTEM_MESSAGE, ERROR_MESSAGE, FORWARD_DASH, EMPTY_STRING };
