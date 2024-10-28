import initializeRace from './controllers/initializeRace.js';
import createRace from './controllers/createRace.js';
import executeRaceRounds from './controllers/executeRaceRounds.js';
import displayResult from './controllers/displayResult.js';
import OutputView from './views/OutputView.js';

class App {
  async run() {
    try {
      const { carNames, rounds } = await initializeRace();
      const race = createRace(carNames, rounds);

      executeRaceRounds(race);
      displayResult(race);
    } catch (error) {
      OutputView.printError(error.message, error.name);
      throw error;
    }
  }
}

export default App;
