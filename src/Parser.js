import Validator from './Validator.js';

const Parser = {
  carNameInput(input) {
    const carNameList = input.split(',');
    Validator.carNameList(carNameList);
    return carNameList;
  },
};

export default Parser;
