import { MissionUtils } from '@woowacourse/mission-utils';

export default function printResult(winners) {
  return MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
}
