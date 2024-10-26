import {
  checkCommaSeparatedNames,
  checkCarNames,
} from '../validators/validator.js';

function splitCarNames(carNamesInput) {
  checkCommaSeparatedNames(carNamesInput);

  return carNamesInput.split(',').map((name) => name.trim());
}

export default function parseCarNames(carNamesInput) {
  const carNames = splitCarNames(carNamesInput);
  checkCarNames(carNames);

  return carNames;
}
