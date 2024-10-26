import GAME from './Game.js';

const GAME_MESSAGE = Object.freeze({
  readCarName: `경주할 자동차 이름을 입력하세요.(이름은 ${GAME.inputDelimeterName}(${GAME.inputDelimeterSign}) 기준으로 구분)\n`,
  readTryCount: '시도할 횟수는 몇 회인가요?\n',
  resultHeader: '실행 결과\n',
  resultDelimeter: ':',
  raceMarker: '-',
  finalWinner: '최종 우승자 : ',
  winnerDelimeter: ', ',
});

export default GAME_MESSAGE;
