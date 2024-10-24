import { ROUND_ERROR, NAME_ERROR } from "./errors.js";
import { GAME_NUMBERS } from "./constants.js";

export const handleNameErrors = (names) => {
  // 이름의 길이가 0인 경우
  if (names.some((name) => name === "")) {
    throw new Error(NAME_ERROR.EMPTY);
  }

  // 이름의 길이가 5보다 큰 경울
  if (names.some((name) => name.length > 5)) {
    throw new Error(NAME_ERROR.MAX_NAME_LENGTH);
  }

  // 중복된 자동차 이름이 있는 경우
  if (new Set(names).size !== names.length) {
    throw new Error(NAME_ERROR.DUPLICATED);
  }

  // 자동차 이름이 2개 미만인 경우
  if (names.length < 2) {
    throw new Error(NAME_ERROR.MIN_NAMES);
  }
};

export const handleNumberErrors = (inputNumber) => {
  // 숫자가 아닌 값을 입력한 경우
  if (!Number.isInteger(inputNumber)) {
    throw new Error(ROUND_ERROR.IS_DIGIT);
  }

  // MIN ROUNDS 보다 작은 수를 입력한 경우
  if (inputNumber < GAME_NUMBERS.MIN_ROUNDS) {
    throw new Error(ROUND_ERROR.MIN_ROUNDS);
  }

  // MAX ROUNDS 보다 큰 수를 입력한 경우
  if (inputNumber > GAME_NUMBERS.MAX_ROUNDS) {
    throw new Error(ROUND_ERROR.MAX_ROUNDS);
  }
};
