import { MAGICNUMBER } from '../constants/index.js';

const validation = {
  isLengthBelowFive: function isLengthBelowFive(inputs) {
    const inputArr = inputs.split(MAGICNUMBER.SEPARATOR);
    return inputArr.every((input) => input.length < 6);
  },
};

export default validation;
