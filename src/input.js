import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, IO_MESSAGE } from "./constants/message.js";

async function getUserInput() {
  let vehicleNames = await Console.readLineAsync(IO_MESSAGE.INPUT_CAR);
  vehicleNames = vehicleNames.split(",");
  if (
    vehicleNames.length < 2 ||
    vehicleNames.some((name) => name.trim() === "" || name.length > 5)
  ) {
    throw new Error(ERROR_MESSAGE.ERROR_CAR);
  }

  let attemptCount = await Console.readLineAsync(IO_MESSAGE.INPUT_TRY);
  attemptCount = Number(attemptCount);
  if (isNaN(attemptCount) || attemptCount <= 0) {
    throw new Error(ERROR_MESSAGE.ERROR_TRY);
  }

  return { vehicleNames, attemptCount };
}

export default getUserInput;
