import { MAGICNUMBER } from '../constants/index.js';

const validation = {
  isLengthBelowFive: function isLengthBelowFive(inputArr) {
    return inputArr.every((input) => input.length < 6);
  },
  hasSpace: function hasSpace(inputArr) {
    return inputArr.some((input) => /\s/g.test(input));
  },
};

export default validation;
