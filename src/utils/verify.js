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
      OutputView.throwErrorMessage(ERROR_MESSAGE.CAR_NAME_LENGTH);
    }

    if (hasDuplicateName) {
      OutputView.throwErrorMessage(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
    }

    return carNames; // 유효한 배열을 반환
  }

  verifyTryCount(tryCountInput) {
    const tryCount = Number(tryCountInput);

    if (isNaN(tryCount) || tryCount < 1) {
      OutputView.throwErrorMessage(ERROR_MESSAGE.TRY_COUNT_INVALID);
    }

    return tryCount;
  }
}

export default new Verify();
