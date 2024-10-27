import { MissionUtils } from '@woowacourse/mission-utils';

export function gameStartComment() {
  MissionUtils.Console.print('실행 결과');
}
export function gameWinnerComment(winners) {
  MissionUtils.Console.print(`최종 우승자 : ${winners}`);
}
