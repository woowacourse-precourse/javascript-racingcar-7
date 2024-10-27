export const MESSAGES = {
  INPUT_PLAYER_NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n)',
  INPUT_MOVE_COUNT: '시도할 횟수는 몇 회인가요?',
  WINNER_MESSAGE: '최종 우승자 : ',
  ERROR_MESSAGE: '[ERROR]',
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
