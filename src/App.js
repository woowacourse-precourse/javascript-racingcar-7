import CarRacingGame from './classes/CarRacingGame.js';
import CarRacingInputReader from './classes/CarRacingInputReader.js';

class App {
  async run() {
    const carNames = await CarRacingInputReader.getCarNames();
    const totalRounds = await CarRacingInputReader.getTotalRounds();

    const carRacing = new CarRacingGame(carNames);

    carRacing.startGame(totalRounds);
  }
}

export default App;
