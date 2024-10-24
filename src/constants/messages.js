const GAME_MESSAGE = Object.freeze({
  START: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ATTEMPTS: '시도할 횟수는 몇 회인가요?\n',
  RESULT: '실행 결과',
  FINAL_WINNER: '최종 우승자 :',
});

const ERROR_PREFIX = Object.freeze('[ERROR]');

const CAR_NAME_ERROR_MESSAGE = Object.freeze({
  NO_INPUT: '자동차 이름을 입력해주세요.',
  OUT_OF_RANGE: '자동차 이름은 5자 이하로 입력해주세요.',
  ONE_CAR_NAME: '자동차는 두 대 이상 입력해주세요.',
  CONTAIN_COMMA: '자동차 이름은 쉼표(,)를 포함할 수 없습니다.',
  INCLUDE_SPACE: '자동차 이름에 공백은 포함할 수 없습니다.',
  DUPLICATE_CAR_NAME: '자동차 이름이 중복되었습니다.',
});

const ATTEMPT_ERROR_MESSAGE = Object.freeze({
  NO_INPUT: '시도할 횟수를 입력해주세요.',
  NOT_A_NUMBER: '시도할 횟수는 숫자로 입력해주세요.',
  OUT_OF_RANGE: '시도할 횟수는 0보다 크고 9보다 작아야 합니다.',
});

export {
  GAME_MESSAGE,
  CAR_NAME_ERROR_MESSAGE,
  ATTEMPT_ERROR_MESSAGE,
  ERROR_PREFIX,
};
