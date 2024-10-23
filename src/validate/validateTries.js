import { validateInput } from "./validateInput.js";

export function validateTries(inputtedTries) {
  validateInput(inputtedTries);
  const num = +inputtedTries;
  validateIsNumber(num);
  validateIsInteger(num);
  validateIsNonNegative(num);
  return num;
}

function validateIsNumber(value) {
  if (isNaN(value)) {
    throw new Error('[ERROR] 입력한 횟수가 숫자가 아닙니다');
  }
}

function validateIsInteger(value) {
  if (!Number.isInteger(value)) {
    throw new Error('[ERROR] 입력한 횟수가 정수여야 합니다.');
  }
}

function validateIsNonNegative(value) {
  if (value < 0) {
    throw new Error('[ERROR] 입력한 횟수가 음수입니다');
  }
}