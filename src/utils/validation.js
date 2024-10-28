export function checkForDuplicates(carNames) {
  const uniqueCarNames = new Set(carNames);
  if (uniqueCarNames.size !== carNames.length) {
    throw new Error(
      "[ERROR] 중복된 자동차 이름이 있습니다. 각 이름은 고유해야 합니다."
    );
  }

  return true;
}
