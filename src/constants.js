export const MESSAGES = {
  INPUT_PLAYER_NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n)',
  INPUT_MOVE_COUNT: '시도할 횟수는 몇 회인가요?',
  WINNER_MESSAGE: '최종 우승자 : ',
};
export const ERROR_MESSAGES = {
  INVALID_PLAYER_NAME:
    '[ERROR] 이름은 1자에서 5자 이하여야 하며 영문,숫자,한글,특수문자 -_!: 만 사용할 수 있습니다.',
  INVALID_MOVE_COUNT: '[ERROR] 이동 횟수는 1 이상의 정수로 입력해야 합니다.',
};

export const GAME_SETTINGS = {
  DELIMITER: ',',
  MIN_PLAYER_NAME_LENGTH: 1,
  MAX_PLAYER_NAME_LENGTH: 5,
  MIN_SUCCESS_SCORE: 4,
  SCORE_SYMBOL: '-',
  NEW_LINE: '\n',
  PLAYER_NAME_DELIMITER: ', ',
};

export const REGEX = {
  PLAYER_NAME_REGEX: new RegExp(
    `^[a-zA-Z0-9ㄱ-ㅣ가-힣\\s-_!:]{${GAME_SETTINGS.MIN_PLAYER_NAME_LENGTH},${GAME_SETTINGS.MAX_PLAYER_NAME_LENGTH}}$`
  ),
  POSITIVE_INTEGER_REGEX: /^\d+$/,
};
