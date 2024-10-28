const INPUT_MESSAGE = Object.freeze({
  INPUT_CARS:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_COUNT: '시도할 횟수는 몇 회인가요?\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  RESULT: '실행 결과',
  WINNER: '최종 우승자 : ',
});

const DELEMETER = ',';

const RANDOM_NUMBER = Object.freeze({
  MIN: 0,
  MAX: 9,
  THRESHOLD: 4,
});

const MAX_NAME_LENGTH = 5;

const ERROR_TAG = '[ERROR] ';
const ERROR_MESSAGE = Object.freeze({
  INVALID_NAME_LENGTH: ERROR_TAG.concat('이름은 5자 이하로 입력해주세요.'),
  INVALID_NAME_NULL: ERROR_TAG.concat('이름을 입력해주세요.'),
  INVALID_NAME_SPECIAL_CHARACTER: ERROR_TAG.concat(
    '이름에 알파벳과 숫자만 입력해주세요.'
  ),
});

export {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  DELEMETER,
  RANDOM_NUMBER,
  MAX_NAME_LENGTH,
  ERROR_MESSAGE,
};
