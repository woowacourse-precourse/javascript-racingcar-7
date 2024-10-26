import { MissionUtils } from '@woowacourse/mission-utils';

function printWinner(winnerArray) {
  if (winnerArray.length === 1) {
    return MissionUtils.Console.print(`최종 우승자 : ${winnerArray[0]}`);
  }

  let winnerResult = '최종 우승자 : ';
  winnerResult += winnerArray.join(', ');

  return MissionUtils.Console.print(winnerResult);
}

export default printWinner;
