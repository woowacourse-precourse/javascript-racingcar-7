import CAR_RACE from "../constants/carRace.js";
import { ERROR_MESSAGES } from "../constants/messages.js";

const carRace = {
  tryCountValidator: (tryCount) => {
    if (!Number.isInteger(tryCount)) {
      throw new Error(ERROR_MESSAGES.TRY_COUNT_NUMBER);
    }

    if (tryCount < CAR_RACE.MIN_ROUND_COUNT) {
      throw new Error(ERROR_MESSAGES.TRY_COUNT_MIN);
    }
  },
};

export default carRace;
