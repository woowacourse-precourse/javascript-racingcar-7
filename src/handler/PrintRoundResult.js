import { MissionUtils } from "@woowacourse/mission-utils";
import { DISTANCE_CHAR } from "../constants/Constants.js";

export class PrintRoundResult {
  print(roundResult) {
    MissionUtils.Console.print('');
    roundResult.map((car) => MissionUtils.Console.print(`${car.name} : ${DISTANCE_CHAR.repeat(car.length)}`));
  }
}
