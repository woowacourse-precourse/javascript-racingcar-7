import { MAGICNUMBER } from '../constants/index.js';

const validation = {
  /**
   *
   * @param {Array} inputArr
   * @returns
   */
  isLengthBelowFive: function isLengthBelowFive(inputArr) {
    return inputArr.every((input) => input.length < 6);
  },
  /**
   *
   * @param {Array} inputArr
   * @returns {Boolean}
   */
  hasSpace: function hasSpace(inputArr) {
    return inputArr.some((input) => /\s/g.test(input));
  },
  /**
   *
   * @param {Array} inputArr
   * @returns {Boolean}
   */
  isEmpty: function isEmpty(inputArr) {
    return inputArr.some((input) => !input);
  },
  /**
   *
   * @param {Array} inputArr
   * @returns {Boolean}
   */
  isNotDuplicate: function isNotDuplicate(inputArr) {
    const tmpSet = new Set(inputArr);
    return inputArr.length === tmpSet.size;
  },
  /**
   *
   * @param {Number} input
   * @returns {Boolean}
   */
  isPositiveInteger: function isPositiveInteger(input) {
    return input > 0 && Number.isInteger(input);
  },
};

export default validation;
