import { ERROR_MESSAGES } from "../../constants/constants.js";

export function validateCarNameOnlyLetters(inputCarNames) {
  const letterOnlyRegex = /^[^ㄱ-ㅎ가-힣a-zA-Z]+$/;
  const isValid = inputCarNames.every(
    (carName) => !letterOnlyRegex.test(carName)
  );
  if (!isValid) throw new Error(ERROR_MESSAGES.NAME_MUST_BE_KOREAN_OR_ENGLISH);
  return;
}
