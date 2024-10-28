import validateCarName from './validation/validate-carname.js';
import validateAttemptCount from './validation/validate-attempt-count.js';
import Race from './race/race.js';
import InputPrompt from './input/input-prompt.js';
import InputParser from './input/input-parser.js';

class App {
  async run() {
    const carNamesInput = await InputPrompt.getCarNames();
    const carNameList = InputParser.parseCarNameInput(carNamesInput);
    validateCarName(carNameList);

    const attemptCountInput = await InputPrompt.getAttemptCount();
    const attemptCount = InputParser.parseAttemptCountInput(attemptCountInput);
    validateAttemptCount(attemptCount);

    const race = new Race(carNameList, attemptCount);
    race.play();
  }
}

export default App;
