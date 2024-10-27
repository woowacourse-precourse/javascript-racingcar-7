const INPUT_PROMPT = Object.freeze({
  CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  MOVE_ATTEMPTS: '시도할 횟수는 몇 회인가요?\n',
});

const ERROR_MESSAGE = Object.freeze({
  CAR_NAME_VALIDATION:
    '자동차 이름은 비어 있지 않고 5글자 이하로 입력해주세요.',
  CAR_NAME_ALLOWED_CHARACTERS:
    '자동차의 이름은 한글, 숫자, 영어로만 구성되어야 합니다.',
  CAR_NAME_STARTS_WITH_NUMBER: '자동차 이름은 숫자로 시작할 수 없습니다.',
  MOVE_ATTEMPTS_MUST_BE_NUMBER: '이동을 시도할 횟수는 숫자로 입력해주세요.',
  MOVE_ATTEMPTS_MUST_BE_GREATER_THAN_ZERO:
    '이동을 시도할 횟수는 0보다 큰 값이어야 합니다.',
});

const REGEXP = Object.freeze({
  CAR_NAME_VALID_CHARACTERS: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]*$/,
  STARTS_WITH_NUMBER: /^\d/,
});

export { INPUT_PROMPT, ERROR_MESSAGE, REGEXP };
