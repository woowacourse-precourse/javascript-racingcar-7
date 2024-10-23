import RacingCar from "./RacingCar.js";
class App {
  async run() {
    const racingCar = new RacingCar();

    racingCar.start();
  }
}

export default App;
