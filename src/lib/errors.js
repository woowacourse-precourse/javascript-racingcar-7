import { GAME_NUMBERS } from "./constants";

const ERROR = "[ERROR] ";

export const NAME_ERROR = Object.freeze({
  EMPTY: ERROR + "이름은 공백일 수 없습니다.",
  MAX_NAME_LENGTH:
    ERROR + `${GAME_NUMBERS.MAX_NAME_LENGTH}자 이하로 작성해야 합니다.`,
  MIN_NAMES: ERROR + `${GAME_NUMBERS.MIN_NAMES}개 이상의 이름을 적어주세요.`,
  DUPLICATED: ERROR + "중복된 이름은 허용되지 않습니다.",
});

export const ROUND_ERROR = Object.freeze({
  IS_DIGIT: ERROR + "숫자만 입력해 주세요.",
  MAX_ROUNDS: ERROR + `${GAME_NUMBERS.MAX_ROUNDS} 이하의 숫자를 입력해 주세요.`,
  MIN_ROUNDS: ERROR + `${GAME_NUMBERS.MIN_ROUNDS} 이상의 숫자를 입력해 주세요.`,
});
