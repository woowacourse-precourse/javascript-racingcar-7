export const CONSOLE_MESSAGE = Object.freeze({
  CAR_INPUT_MESSAGE:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  TRY_COUNT_INPUT_MESSAGE: '시도할 횟수는 몇 회인가요?\n',
  GAME_START_MESSAGE: '\n실행 결과',
  ANNOUNCE_WINNER_MESSAGE: '최종 우승자 : ',
});

export const ERROR_MESSAGE = Object.freeze({
  EMPTY_INPUT: '입력값이 없습니다.',
  MIN_CAR_COUNT:
    '경주할 자동차는 2대 이상이어야 합니다. 쉼표(,)로 구분해서 2대 이상 입력해주세요.',
  DUPLICATED_CAR_NAME: '중복된 자동차 이름이 존재합니다.',
  INVALID_TRY_COUNT_TYPE: '시도 횟수는 숫자로 입력해주세요.',
  MIN_TRY_COUNT: '시도 횟수는 1 이상의 자연수여야 합니다.',
  MAX_CAR_NAME_LENGTH: '자동차 이름은 5자 이하만 가능합니다.',
  MIN_CAR_NAME_LENGTH: '자동차 이름은 1자 이상이어야 합니다.',
});
