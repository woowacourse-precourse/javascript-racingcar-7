import {
  checkCommaSeparatedNames,
  checkCarNames,
} from '../validators/validator.js';

/**
 * 쉼표로 구분된 자동차 이름을 분리한다.
 *
 * @function splitCarNames
 * @param {string} carNamesInput - 쉼표로 구분된 자동차 이름 문자열
 * @returns {string[]} 분리된 자동차 이름 배열
 * @throws {Error} 입력 형식이 올바르지 않은 경우 에러를 던진다.
 */
function splitCarNames(carNamesInput) {
  checkCommaSeparatedNames(carNamesInput);

  return carNamesInput.split(',').map((name) => name.trim());
}

/**
 * 자동차 이름을 파싱하고 유효성을 검사한다.
 *
 * @function parseCarNames
 * @param {string} carNamesInput - 사용자 입력 문자열
 * @returns {string[]} 유효한 자동차 이름 배열
 * @throws {Error} 유효하지 않은 자동차 이름이 포함된 경우 에러를 던진다.
 */
export default function parseCarNames(carNamesInput) {
  const carNames = splitCarNames(carNamesInput);
  checkCarNames(carNames);

  return carNames;
}
