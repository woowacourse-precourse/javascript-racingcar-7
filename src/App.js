import OutputView from './view/OutputView.js';
import GameController from './GameController.js';

class App {
  #controller;

  async run() {
    this.#controller = new GameController();

    await this.#controller.init();
    const { cars } = this.#controller.getInfo();
    this.#controller.execute();

    this.result(cars);
  }

  result(cars) {
    const winners = this.judgeWinner(cars);
    OutputView.printWinner(winners);
  }

  judgeWinner(cars) {
    const max = Math.max(...cars.map((car) => car.getCarInformation().distance));
    const winners = cars
      .filter((car) => car.getCarInformation().distance === max)
      .map((car) => car.getCarInformation().name);

    return winners;
  }
}

export default App;
