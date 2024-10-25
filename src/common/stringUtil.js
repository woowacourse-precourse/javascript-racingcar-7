function hasSpecialCharacter(string) {
  const REGEX = /[^0-9a-zA-Z가-힣]/;
  return REGEX.test(string);
}

function isNumber(string) {
  return !Number.isNaN(Number(string));
}

export { hasSpecialCharacter, isNumber };
