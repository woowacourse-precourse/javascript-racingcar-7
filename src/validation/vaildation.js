const isOnlyAlphabetAndComma = function isOnlyAlphabetAndCommaFunc(
  inputForRacingCars,
) {
  const AlphabetAndCommaRegex = /^[a-zA-Z,]$/;

  if (
    ![...inputForRacingCars].every(char => AlphabetAndCommaRegex.test(char))
  ) {
    throw new Error(
      '[ERROR]: 유효하지 않은 입력: 알파벳 대소문자와 ","만 입력 가능합니다.',
    );
  }
  return true;
};

export default isOnlyAlphabetAndComma;
