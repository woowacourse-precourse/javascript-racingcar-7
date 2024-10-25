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
  return inputForRacingCars;
};

const checkValidNameLength = function checkValidNameLengthFunc(carNamesArray) {
  if (!carNamesArray.every((name) => name.length >= 1 && name.length <= 5)) {
    throw new Error(
      '[ERROR]: 유효하지 않은 자동차 이름: 자동차의 이름은 1자 이상 5자 이하로 구성되어야 합니다.',
    );
  }
  return carNamesArray;
};

const checkDuplicateNames = function checkDuplicateNamesFunc(carNamesArray) {
  const uniqueNames = new Set(carNamesArray);

  if (uniqueNames.size !== carNamesArray.length) {
    throw new Error(
      '[ERROR] 중복된 자동차 이름 : 중복된 자동차 이름은 허용되지 않습니다.',
    );
  }
  return carNamesArray;
};

const checkOnlyNumber = function checkOnlyNumberFunc(inputForTryCount) {
  const numberRegex = /^[0-9]+$/;

  if (!numberRegex.test(inputForTryCount)) {
    throw new Error('[ERROR]: 유효하지 않은 입력: 숫자만 입력 가능합니다.');
  }
  return inputForTryCount;
};

const checkValidRange = function checkValidRangeFunc(inputForTryCount) {
  const checkNumber = Number(inputForTryCount);

  if (checkNumber < 1 || checkNumber > 300) {
    throw new Error(
      '[ERROR]: 유효하지 않은 횟수: 1이상 300이하의 숫자만 입력 가능합니다.',
    );
  }
  return inputForTryCount;
};

const checkIsNull = function checkIsNullFunc(inputString) {
  if (!inputString) {
    throw new Error('[ERROR]: 아무것도 입력되지 않았습니다.');
  }

  return inputString;
};

export {
  checkOnlyAlphabetAndComma,
  checkValidNameLength,
  checkDuplicateNames,
  checkOnlyNumber,
  checkValidRange,
  checkIsNull,
};
