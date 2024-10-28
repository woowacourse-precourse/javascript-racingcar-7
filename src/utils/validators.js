export function isCarNames(str, delimiter) {
  const uniqueCarNames = new Set(str.split(delimiter));

  return [...uniqueCarNames].every((carName) => {
    return carName.length > 0 && carName.length <= 5;
  });
}

export function isUniqueCarNames(str, delimiter) {
  const carNames = str.split(delimiter);
  const uniqueCarNames = new Set(carNames);

  return uniqueCarNames.size === carNames.length;
}

export function isPositiveNumber(str) {
  return Number(str) > 0;
}
