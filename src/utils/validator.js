export function validateCarNames(names) {
  return (
    names.length >= 2 &&
    names.every((name) => name.trim() !== "" && name.length <= 5)
  );
}

export function validateTryCount(count) {
  return !isNaN(count) && count > 0;
}
