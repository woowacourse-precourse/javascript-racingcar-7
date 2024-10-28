import { errorMessages } from '../constant.js';

export function checkedValidCarNameLength(carNames) {
  carNames.forEach((carName) => {
    if (carName.length > 5) {
      throw new Error(`${errorMessages.prefix} ${errorMessages.invalidCarNameLength}`);
    }
  });
}
