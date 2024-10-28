export function validateCarNames(carNames) {
    const isValidLength = carNames.every(name => name.length > 0 && name.length <= 5);
    const isUniqueNames = new Set(carNames).size === carNames.length;
    return isValidLength && isUniqueNames;
  }

  export function validateAttemptCount(attemptCount) {
    return Number.isInteger(attemptCount) && attemptCount > 0;
  }