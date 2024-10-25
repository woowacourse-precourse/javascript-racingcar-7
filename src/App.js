import RacingCar from "./RacingCar.js";
class App {
  async run() {
    const racingCar = new RacingCar();
    racingCar.getCarName();
  }
}

export default App;
