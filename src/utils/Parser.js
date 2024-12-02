import MESSAGE from '../constants/Message.js';
import { InputValidator } from './Validator.js';
import DEFINITION from '../constants/Definition.js';

export const InputParser = {
  parseNamesToArray: (input) => {
    const splitedInput = input.split(DEFINITION.DELIMITER.NAME);
    const trimArray = InputParser.trimArray(splitedInput);
    trimArray.forEach((i) => InputValidator.isMaxLength(i));

    return trimArray;
  },
  trimArray: (inputArray) => {
    const trimedArray = inputArray.map((item) => item.trim());
    return trimedArray;
  },
};
