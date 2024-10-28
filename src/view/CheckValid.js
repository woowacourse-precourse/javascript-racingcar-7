import { ERROR_MESSAGE } from "../Constant.js";

class CheckValid {
  carNameException(carArr) {
    carArr.forEach((car) => {
      if (car.length > 5) {
        throw new Error(ERROR_MESSAGE.CAR_NAME_5_LESS);
      } else if (car.trim().length == 0) {
        throw new Error(ERROR_MESSAGE.CAR_NAME_1_MORE);
      }
    });
  }

  moveCntCheckValid(moveCnt) {
    if (isNaN(moveCnt)) {
      throw new Error(ERROR_MESSAGE.ATTEMPT_CNT_NUMBER);
    } else if (!Number.isInteger(Number(moveCnt)) || moveCnt <= 0) {
      throw new Error(ERROR_MESSAGE.ATTEMPT_CNT_POSITIVE);
    }
  }
}

export default CheckValid;
