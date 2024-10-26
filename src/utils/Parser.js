export function parseCarNames(userInputCarNames) {
  return userInputCarNames.split(',').map(carName => carName.trim());
}
