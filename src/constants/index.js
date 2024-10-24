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

const CRITERIA_NUMBER = 4;

export { IO_MESSAGE, GAME, CRITERIA_NUMBER };
