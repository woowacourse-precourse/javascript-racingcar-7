export function checkedValidCarNameLength(carNames) {
  if (carNames.length > 5) {
    return false;
  }
  return true;
}
