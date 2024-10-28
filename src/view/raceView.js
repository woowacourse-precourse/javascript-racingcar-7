import { INFO_MESSAGE } from "../libs/constants.js";
import { printResult } from "../libs/utils.js";

export function printCurrentStatus(status) {
  status.forEach(({ name, position }) => printResult(`${name} : ${"-".repeat(position)}`));
  printResult("\n");
}

export function printFinalWinner(winner) {
  printResult(INFO_MESSAGE.ANSWER_FINAL_WINNER + winner);
}
