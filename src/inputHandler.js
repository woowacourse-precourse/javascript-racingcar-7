import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "./constants.js";

export async function getValidatedCarNames() {
  const CARS_INPUT = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
  const carNames = CARS_INPUT.split(",");

  carNames.forEach((carName) => {
    if (carName.length > 5) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH);
    }
  });

  return carNames;
}