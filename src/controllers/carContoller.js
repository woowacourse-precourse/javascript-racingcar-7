import checkCommaSaperatedNames from '../validators/validator.js';
import getCarNamesInput from './inputController.js';

function splitCarNames(carNamesInput) {
  checkCommaSaperatedNames(carNamesInput);

  return carNamesInput.split(',').map((name) => name.trim());
}

export default async function initializeCars() {
  const carNamesInput = await getCarNamesInput();
  const carNames = splitCarNames(carNamesInput);
}
