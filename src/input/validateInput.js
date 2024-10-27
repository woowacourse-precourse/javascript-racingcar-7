import ErrorMessage from '../constant/errorMessage.js';

export function checkCarName(carNameList) {
  carNameList.forEach(carName => {
    if (carName.length <= 0) {
      throw new Error(ErrorMessage.CAR_NAME_TOO_SHORT);
    }
    else if (carName.length > 5) {
      throw new Error(ErrorMessage.CAR_NAME_TOO_LONG);
    }
  });
}

export function checkMoveCount(moveCount) {
  if (isNaN(moveCount)) {
    throw new Error(ErrorMessage.MOVE_COUNT_NAN);
  }
  else if (moveCount <= 0) {
    throw new Error(ErrorMessage.MOVE_COUNT_NON_POSITIVE);
  }
  else if (!Number.isInteger(moveCount)) {
    throw new Error(ErrorMessage.MOVE_COUNT_NOT_INTEGER);
  }
  else if (moveCount > Number.MAX_SAFE_INTEGER) {
    throw new Error(ErrorMessage.MOVE_COUNT_TOO_LARGE);
  }
}
