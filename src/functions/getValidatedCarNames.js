import { PRINT_MESSAGES } from '../constants/messages.js';
import { getUserInput } from '../utils/ioModule.js';
import { splitByComma } from '../utils/stringUtils.js';
import {
  validateCarNames,
  validateRacingCarInput,
} from '../validator/validatePipeline.js';

const getValidatedCarNames = async function getValidatedCarNamesFunc() {
  const inputForRacingCars = await getUserInput(PRINT_MESSAGES.INPUT.CAR_NAME);
  validateRacingCarInput(inputForRacingCars);

  const carNamesArray = splitByComma(inputForRacingCars);
  validateCarNames(carNamesArray);

  return carNamesArray;
};

export default getValidatedCarNames;
