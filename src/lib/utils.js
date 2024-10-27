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
