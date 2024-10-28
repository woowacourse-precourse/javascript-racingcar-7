// input값을 검증하는 verify 모듈

import OutputView from "../views/outputView.js";
import { ERROR_MESSAGE } from "./message.js";

class Verify {
  verifyCarNames(carNamesInput) {
    const carNames = carNamesInput.split(",").map((name) => name.trim());

    const hasInvalidName = carNames.some(
      (name) => name.length === 0 || name.length > 5
    );
    const hasDuplicateName = new Set(carNames).size !== carNames.length;

    if (hasInvalidName) {
      OutputView.printErrorMessage(ERROR_MESSAGE.CAR_NAME_LENGTH);
      throw new Error(
        `${ERROR_MESSAGE.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGE.CAR_NAME_LENGTH}`
      );
    }

    if (hasDuplicateName) {
      OutputView.printErrorMessage(ERROR_MESSAGE.DUPLICATE_NAME);
      throw new Error(
        `${ERROR_MESSAGE.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGE.DUPLICATE_NAME}`
      );
    }

    return carNames;
  }

  verifyTryCount(tryCountInput) {
    const tryCount = Number(tryCountInput);

    if (isNaN(tryCount) || tryCount < 1) {
      OutputView.printErrorMessage(ERROR_MESSAGE.TRY_COUNT);
      return false;
    }

    return tryCount;
  }
}

export default new Verify();
