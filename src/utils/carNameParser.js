import { RULES } from '../constants/index.js';

export const carNameParser = (carNames) => {
  return carNames.split(RULES.SPLIT_DELIMITER).map((carName) => carName.trim());
};
