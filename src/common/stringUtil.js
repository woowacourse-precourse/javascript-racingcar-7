function hasSpecialCharacter(string) {
  const REGEX = /[^0-9a-zA-Z가-힣]/;
  return REGEX.test(string);
}

export { hasSpecialCharacter };
