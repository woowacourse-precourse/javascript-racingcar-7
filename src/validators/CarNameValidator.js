import { ERROR_MESSAGE } from '../constants/Message.js';
import { GAME_SETTINGS, SYMBOLS } from '../constants/Symbol.js';

export default function validateCarName(carNameList) {
  carNameList.forEach(carName => {
    if (carName === SYMBOLS.EMPTY) {
      throw new Error(ERROR_MESSAGE.EMPTY_CAR_NAME);
    }

    if (carName.includes(SYMBOLS.SPACE)) {
      throw new Error(ERROR_MESSAGE.SPACE_IN_CAR_NAME);
    }

    if (carName.length > GAME_SETTINGS.MAX_NAME_LENGTH) {
      throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH);
    }
  });

  if (carNameList.length < GAME_SETTINGS.MINIMUM_CARS) {
    throw new Error(ERROR_MESSAGE.LESS_THAN_TWO_CARS);
  }

  const checkDuplicateCarName = new Set(carNameList);
  if (checkDuplicateCarName.size !== carNameList.length) {
    throw new Error(ERROR_MESSAGE.DUPLICATE_CAR_NAME);
  }
}
