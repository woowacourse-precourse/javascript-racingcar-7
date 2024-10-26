// Input, Ouput 구분자
export const InputSeperator = Object.freeze({
  NAME: '쉼표',
  MARK: ',',
});
export const OUTPUT_SEPERATOR = ', ';

// Input, Output 시 화면출력 관련 설명
export const InputComment = Object.freeze({
  CAR_NAME: `경주할 자동차 이름을 입력하세요.(이름은 ${InputSeperator.NAME}(${InputSeperator.MARK}) 기준으로 구분)\n`,
  TURN: '시도할 횟수는 몇 회인가요?\n',
});
export const OutputComment = Object.freeze({
  RACING_MARK: '-',
  STATUS_TITLE: '\n실행 결과',
  WINNER_TITLE: '최종 우승자',
  TURN_SEPERATOR: '',
});
