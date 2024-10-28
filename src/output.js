import { Console } from "@woowacourse/mission-utils";
import { IO_MESSAGE } from "./constants/message.js";

function displayResult(winners) {
  winners = winners.join(", ");
  Console.print(`${IO_MESSAGE.OUTPUT_WINNER} ${winners}`);
}
export default displayResult;
