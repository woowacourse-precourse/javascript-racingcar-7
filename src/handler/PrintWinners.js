import { MissionUtils } from "@woowacourse/mission-utils";
import { PRINT_WINNER_MESSAGE } from "../constants/Messages.js";

export class PrintWinners {
  print(winnerArr) {
    const winnerNames = winnerArr.join(', ');
    MissionUtils.Console.print(PRINT_WINNER_MESSAGE + winnerNames);
  }
}
