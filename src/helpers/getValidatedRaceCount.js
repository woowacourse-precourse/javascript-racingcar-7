import InputView from '../view/InputView.js';
import RaceCountValidations from '../validations/RaceCountValidations.js';

const getValidatedRaceCount = async () => {
  const raceCount = await InputView.readRaceCountInput();
  RaceCountValidations(raceCount);
  return raceCount;
}

export default getValidatedRaceCount;