import { Console } from "@woowacourse/mission-utils";
import {
  ERROR_BLANK,
  ERROR_INVALID_MOVE_COUNT,
  ERROR_INVALID_INPUT_TYPE,
  throwError,
} from "../constants/errorContants.js";

export async function inputMoveCount() {
  const inputCount = String(
    await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
  );
  validateInputCount(inputCount);
  return Number(inputCount);
}

function validateInputCount(count) {
  validateBlank(count);
  validateNumber(count);
  validatePositive(count);
}

function validateBlank(count) {
  if (count == "") throwError(ERROR_BLANK);
}

function validateNumber(count) {
  if (isNaN(count)) throwError(ERROR_INVALID_INPUT_TYPE);
}

function validatePositive(count) {
  if (count <= 0) throwError(ERROR_INVALID_MOVE_COUNT);
}
