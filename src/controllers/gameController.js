import { validateRoundCount } from '../validators/validator.js';
import prepareCarNames from './carContoller.js';
import { getCarNamesInput, getRoundCount } from './inputController.js';

export default async function startGame() {
  const carNamesInput = await getCarNamesInput();
  const carNames = prepareCarNames(carNamesInput);

  const roundCountInput = await getRoundCount();
  const roundCount = validateRoundCount(roundCountInput);
  console.log(carNames, roundCount);
}
