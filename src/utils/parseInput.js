import Car from '../Car.js';
import { validateCarNameList, validateTurnString } from './validateData.js';

// string => Car[]
export const parseCarNameInput = (input) => {
  const carNameList = input.split(',');
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
  validateTurnString(input);
  return Number(input);
};
