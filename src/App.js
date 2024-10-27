import RacingCar from "./RacingCar.js";
class App {
  async run() {
    const racingCar = new RacingCar();

    await racingCar.start();
  }
}

export default App;
