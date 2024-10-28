import CAR from "../constants/car.js";
import { ERROR_MESSAGES } from "../constants/messages.js";
import checkDuplicate from "../utils/checkDuplicate.js";
import limitStrMaxMinLength from "../utils/limitStrMaxMinLength.js";

const car = {
  nameValidator: (carNamesArr) => {
    const hasInvalidLength = carNamesArr.some(
      (carName) => !limitStrMaxMinLength(carName, CAR.NAME_MIN_LENGTH, CAR.NAME_MAX_LENGTH)
    );

    if (hasInvalidLength) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH);
    }
  },
};

export default car;
