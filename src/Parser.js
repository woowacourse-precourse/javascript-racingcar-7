import Validator from './Validator.js';

const Parser = {
  carNameInput(input) {
    const carNameList = input.split(',');
    Validator.carNameList(carNameList);
    return carNameList;
  },

  turnInput(input) {
    Validator.turn(input);
    const turnNumber = Number(input);
    return turnNumber;
  },
};

export default Parser;
