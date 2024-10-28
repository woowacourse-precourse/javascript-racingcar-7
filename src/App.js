import RacingCar from './RacingCar.js';

class App {
  async run() {
    const racingCar = new RacingCar();
    racingCar.receiveInput();
  }
}

export default App;
