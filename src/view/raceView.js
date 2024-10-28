import {
  DASH_CHARACTER,
  EMPTY_LENGTH,
  ERROR_MESSAGE,
  INFO_MESSAGE,
  NEWLINE,
  STATUS_DELIMITER,
} from "../libs/constants.js";
import { RaceError } from "../libs/customError.js";
import { printResult } from "../libs/utils.js";

export function printCurrentStatus(status) {
  status.forEach(({ name, position }) => printResult(name + STATUS_DELIMITER + DASH_CHARACTER.repeat(position)));
  printResult(NEWLINE);
}

export function printFinalWinner(winner) {
  if (!winner || winner.length === EMPTY_LENGTH) {
    throw new RaceError(ERROR_MESSAGE.INVALID_FINAL_WINNER);
  }
  printResult(INFO_MESSAGE.ANSWER_FINAL_WINNER + winner);
}
