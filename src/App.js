import UserInput from './UserInput.js'
import RacingSession from './RacingSession.js'

class App {
  async run() {
    const userInput = new UserInput();
    userInput.inputCarNames();
    userInput.inputAttempts();
    userInput.validateInput();
  
    const racingSession = new RacingSession(userInput.carNames, userInput.attempts);
    racingSession.startRace();
  }
}

export default App;
