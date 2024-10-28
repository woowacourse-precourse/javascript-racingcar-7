import { Console } from "@woowacourse/mission-utils";
import { validateCarNames, validateTryCount } from "./utils/validator.js";

async function getUserInput() {
  let vehicleNames = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  vehicleNames = vehicleNames.split(",");
  if (!validateCarNames(vehicleNames)) {
    throw new Error(
      "[ERROR] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하로 2개 이상 입력해주세요."
    );
  }

  let attemptCount = await Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?\n"
  );
  attemptCount = Number(attemptCount);
  if (!validateTryCount(attemptCount)) {
    throw new Error("[ERROR] 시도할 횟수를 입력해주세요.");
  }

  return { vehicleNames, attemptCount };
}

export default getUserInput;
