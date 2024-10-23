const checkOnlyAlphabetAndComma = function checkOnlyAlphabetAndCommaFunc(
  inputForRacingCars,
) {
  const AlphabetAndCommaRegex = /^[a-zA-Z,]$/;
  if (
    ![...inputForRacingCars].every((char) => AlphabetAndCommaRegex.test(char))
  ) {
    throw new Error(
      '[ERROR]: 유효하지 않은 입력: 알파벳 대소문자와 ","만 입력 가능합니다.',
    );
  }
};

const checkValidNameLength = function checkValidNameLengthFunc(carNamesArray) {
  if (!carNamesArray.every((name) => name.length >= 1 && name.length <= 5)) {
    throw new Error(
      '[ERROR]: 유효하지 않은 자동차 이름: 자동차의 이름은 1자 이상 5자 이하로 구성되어야 합니다.',
    );
  }
};

export { checkOnlyAlphabetAndComma, checkValidNameLength };
