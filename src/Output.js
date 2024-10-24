import { MissionUtils } from "@woowacourse/mission-utils";

export default class Output {
  static printWinners(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}
