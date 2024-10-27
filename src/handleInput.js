import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "./errorMessages.js";

function validateCarNames(carNames) {
  const names = carNames.split(",");

  if (names.some((name) => name.length === 0)) {
    throw new Error(ERROR_MESSAGES.EMPTY_NAME_ERROR);
  }

  if (names.some((name) => name.length > 5)) {
    throw new Error(ERROR_MESSAGES.INVALID_NAME_ERROR);
  }

  if (new Set(names).size !== names.length) {
    throw new Error(ERROR_MESSAGES.SAME_NAME_ERROR);
  }

  return names;
}

function validateRound(round) {
  const roundNumber = Number(round);
  if (isNaN(roundNumber) || !Number.isInteger(roundNumber)) {
    throw new Error(ERROR_MESSAGES.INVALID_ROUND_ERROR);
  }

  if (roundNumber <= 0) {
    throw new Error(ERROR_MESSAGES.ZERO_ROUND_ERROR);
  }

  return roundNumber;
}

export async function getCarName() {
  const carNames = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n"
  );
  return validateCarNames(carNames);
}

export async function getRound() {
  const round = await Console.readLineAsync("시도할 횟수는 몇 회 인가요?\n");
  return validateRound(round);
}
