import UserInput from './UserInput.js';
import RacingSession from './RacingSession.js';
import InputValidator from './InputValidator.js';

class App {
  async run() {
    const userInput = new UserInput();
    await userInput.inputCarNames();
    await userInput.inputAttempts();

    const validator = new InputValidator();
    validator.validateCarNames(userInput.carNames);
    validator.validateAttempts(userInput.attempts);

    const racingSession = new RacingSession(userInput.carNames, userInput.attempts);
    racingSession.startRace();
  }
}

export default App;
