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
      return false;
    }

    if (hasDuplicateName) {
      OutputView.printErrorMessage(ERROR_MESSAGE.DUPLICATE_NAME);
      return false;
    }

    return carNames; // 유효한 자동차 이름 배열 반환
  }

  verifyTryCount(tryCountInput) {
    const tryCount = Number(tryCountInput);

    if (isNaN(tryCount) || tryCount < 1) {
      OutputView.printErrorMessage(ERROR_MESSAGE.TRY_COUNT);
      return false;
    }

    return tryCount; // 유효한 시도 횟수 반환
  }
}

export default new Verify();
