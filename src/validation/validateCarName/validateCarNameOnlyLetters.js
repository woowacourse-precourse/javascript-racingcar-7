import {
  ERROR_MESSAGES,
  LETTER_ONLY_REGEX,
} from "../../constants/constants.js";

export function validateCarNameOnlyLetters(inputCarNames) {
  const isValid = inputCarNames.every(
    (carName) => !LETTER_ONLY_REGEX.test(carName)
  );
  if (isValid) throw new Error(ERROR_MESSAGES.NAME_MUST_BE_KOREAN_OR_ENGLISH);
  return;
}
