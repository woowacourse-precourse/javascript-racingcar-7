import splitByComma from './utils/splitByComma.js';
import {
  checkOnlyAlphabetAndComma,
  checkValidNameLength,
  checkDuplicateNames,
} from './validator/validator.js';
import getUserInput from './utils/getUserInput.js';

class App {
  async run() {
    const inputForRacingCars = await getUserInput('입력');

    checkOnlyAlphabetAndComma(inputForRacingCars);
    const carNamesArray = splitByComma(inputForRacingCars);
    checkValidNameLength(carNamesArray);
    checkDuplicateNames(carNamesArray);

    const inputForTryCount = await getUserInput('시도할 횟수를 입력하세요');
  }
}

export default App;
