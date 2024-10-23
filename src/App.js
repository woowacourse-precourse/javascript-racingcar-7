import CarRacingInputReader from './classes/CarRacingInputReader.js';

class App {
  async run() {
    const inputReader = new CarRacingInputReader();
    const carNamesInput = await inputReader.getCarNames();
    const totalRounds = await inputReader.getTotalRounds();
  }
}

export default App;
