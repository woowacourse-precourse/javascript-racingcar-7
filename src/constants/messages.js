const INPUT_MESSAGE = {
  ENTER_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ENTER_MOVE_ATTEMPTS: '시도할 횟수는 몇 회인가요?\n',
};

const ERROR_MESSAGE = {
  NAME_TOO_SHORT: '[ERROR] 자동차 이름의 길이는 1자 이상이어야 합니다.',
  NAME_TOO_LONG: '[ERROR] 자동차 이름의 길이는 5자 이하여야 합니다.',
  SPECIAL_CHARACTERS_NOT_ALLOWED:
    '[ERROR] 자동차 이름에는 특수문자가 포함될 수 없습니다.',
  ONLY_ENGLISH_AND_KOREAN_ALLOWED:
    '[ERROR] 자동차 이름의 언어는 한글이나 영어만 사용 가능합니다.',
  DUPLICATE_NAME_NOT_ALLOWED: '[ERROR] 자동차 이름은 중복이 불가능합니다.',
  CAR_LIST_TOO_SMALL: '[ERROR] 자동차 개수는 2대 이상이어야 합니다.',
  CAR_LIST_TOO_BIG: '[ERROR] 자동차 개수는 최대 100대까지 가능합니다.',
  WHITESPACE_ONLY_NAME_NOT_ALLOWED:
    '[ERROR] 자동차 이름은 공백으로만 구성될 수 없습니다.',
  EMPTY_INPUT_NOT_ALLOWED: '[ERROR] 입력 내용이 없습니다.',
  ONLY_POSITIVE_NUMBER_ALLOWED:
    '[ERROR] 이동 시도 횟수는 양의 정수만 입력 가능합니다.',
  MOVE_ATTEMPTS_TOO_BIG: '[ERROR] 이동 시도 횟수는 최대 100회까지 가능합니다.',
};

const OUTPUT_MESSAGE = {
  BLANK_LINE: '\n',
  EXECUTION_RESULT: '실행 결과',
  FINAL_WINNER: '최종 우승자 :',
};

export { INPUT_MESSAGE, ERROR_MESSAGE, OUTPUT_MESSAGE };
