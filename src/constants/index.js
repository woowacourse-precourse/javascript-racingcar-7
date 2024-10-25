const IO_MESSAGE = Object.freeze({
  FIRST_INPUT_MESSAGE:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  SECOND_INPUT_MESSAGE: '시도할 횟수는 몇 회인가요?\n',
  OUTPUT_MESSAGE: '최종 우승자 : ',
  SEPERATOR: ', ',
});

const GAME = Object.freeze({
  START_MESSAGE: '\n실행 결과',
  SAPCE_COLON: ' : ',
  NEW_LINE: '\n',
  ROUTE: '-',
});

const ERROR = Object.freeze({
  EMPTY_CAR_STRING_MESSAGE : '[ERROR] 자동차가 입력되지 않았습니다.',
  EMPTY_COUNT_MESSAGE : '[ERROR] 숫자가 입력되지 않았습니다.',
  NONE_POSITIVE_COUNT_MESSAGE : '[ERROR] 양수를 입력해야 합니다.',
  EMPTY_PLAYER_MESSAGE: '[ERROR] 입력되지 않은 플레이어가 존재합니다.'
});

const CRITERIA_NUMBER = 4;

export { IO_MESSAGE, GAME, CRITERIA_NUMBER, ERROR };
