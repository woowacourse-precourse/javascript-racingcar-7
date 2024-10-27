import Car from '../Car.js';
import { InputSeperator } from '../constants/displayConstant.js';
import {
  validateCarNameInput,
  validateCarNameList,
  validateTurnInput,
} from './validateInput.js';

// string => Car[]
export const parseCarNameInput = (input) => {
  validateCarNameInput(input);

  const carNameList = input.split(InputSeperator.MARK);
  validateCarNameList(carNameList);

  return createCarList(carNameList);
};

// string[] => Car[]
const createCarList = (carNameList) => {
  const carList = carNameList.map((name) => {
    return new Car(name);
  });
  return carList;
};

// string => number
export const parseTurnInput = (input) => {
  validateTurnInput(input);
  return Number(input);
};
