import RacingCar from './RacingCar.js';

class App {
  async run() {
    const racingCar = new RacingCar();
    await racingCar.receiveInput();
    racingCar.playRace();
    racingCar.printWinner();
  }
}

export default App;
