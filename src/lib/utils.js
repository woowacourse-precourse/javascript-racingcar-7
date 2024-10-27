/**
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isNotEmptyString(value) {
  return value !== '';
}

/**
 * @template {string | Array} T
 * @param {T} value
 * @param {number} length
 * @returns {boolean}
 */
export function isLengthLessThan(value, length) {
  return value.length <= length;
}

/**
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isNumericString(value) {
  return !Number.isNaN(Number(value));
}

/**
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isPositiveNumericString(value) {
  return Number(value) > 0;
}

/**
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isIntegerNumericString(value) {
  return Number(value) === Math.trunc(Number(value));
}
