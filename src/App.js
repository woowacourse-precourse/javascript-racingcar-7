import * as run from './RacingCar.js';
class App {
  async run() {
    const cars = await run.getCarName();
    const tryCount = await run.getTryCount();
    for (let i = 0; i < tryCount; i++) {
      await run.moveCar(cars);
      run.printCarPosition(cars);
    }
    run.printWinner(cars);
  }
}

export default App;
