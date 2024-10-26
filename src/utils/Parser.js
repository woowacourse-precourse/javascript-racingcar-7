export function parseCarNames(userInputCarNames) {
  return userInputCarNames.split(',').map(carName => carName.trim());
}

export function parseAttempt(userInputAttempt) {
  return Number(userInputAttempt.trim());
}
