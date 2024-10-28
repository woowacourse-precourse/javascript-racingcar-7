import { CAR_NAME_SPLITER } from '../../constants/Rule.js';

const parse = function (rawCarNames) {
  const carNames = rawCarNames.split(CAR_NAME_SPLITER);
  return carNames.map((carName) => carName.trim());
};

export default parse;
