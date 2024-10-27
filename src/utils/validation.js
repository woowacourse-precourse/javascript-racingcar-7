import { ERROR_MESSAGE } from "./error.js";

/**
 * 자동차 이름의 유효성을 검사합니다.
 *
 * @param {string} carName - 입력된 자동차 이름
 * @throws {Error} 자동차 이름이 비어있거나, 길이가 5를 넘긴 경우 오류
 * @returns {boolean} 유효한 경우 true 반환
 */
export function isCarNameValid(carName) {
  if (carName.length === 0) {
    throw new Error(ERROR_MESSAGE.EMPTY_NAME);
  }
  if (carName.length > 5) {
    throw new Error(ERROR_MESSAGE.OVER_NAME_LENGTH);
  }

  return true;
}

/**
 * 시도 횟수의 유효성을 검사합니다.
 *
 * @param {number} turn - 입력된 시도 횟수
 * @throws {Error} 시도 횟수가 숫자가 아니거나, 1보다 작거나, 10보다 클 경우 오류
 * @returns {boolean} 유효한 경우 true 반환
 */
export function isTurnValid(turn) {
  if (isNaN(turn)) {
    throw new Error(ERROR_MESSAGE.NAN_NUMBER);
  }
  if (turn < 1) {
    throw new Error(ERROR_MESSAGE.NONE_POSITIVE_NUMBER);
  }
  if (turn > 10) {
    throw new Error(ERROR_MESSAGE.OVER_MAX_TURN);
  }

  return true;
}

/**
 * 플레이어 수의 유효성을 검사합니다.
 *
 * @param {Array<string>} carList - 검사할 플레이어(자동차) 리스트
 * @throws {Error} 플레이어 수가 2 미만이거나, 5를 초과할 경우 오류
 * @returns {boolean} 유효한 경우 true 반환
 */
export function isPlayerValid(carList) {
  if (carList.length < 2) {
    throw new Error(ERROR_MESSAGE.ONLY_SINGLE_PLAYER);
  }
  if (carList.length > 5) {
    throw new Error(ERROR_MESSAGE.OVER_MAX_PLAYER);
  }

  return true;
}
