import { Random } from '@woowacourse/mission-utils';
import OutputView from './view/OutputView.js';
import GameController from './GameController.js';

class App {
  #controller;

  async run() {
    this.#controller = new GameController();

    await this.#controller.init();
    const { cars, tryNumber } = this.#controller.getInfo();

    this.gameStart(cars, tryNumber);
    this.result(cars);
  }

  gameStart(cars, tryNumber) {
    OutputView.racingStartIntro();

    for (let i = 0; i < tryNumber; i += 1) {
      cars.forEach((car) => {
        const randomNumber = this.getRandomNumber();
        this.tryMove(car, randomNumber);

        const { name, distance } = car.getCarInformation();
        OutputView.printCarState(name, distance);
      });

      OutputView.printBlankLine();
    }
  }

  tryMove(car, randomNumber) {
    if (randomNumber >= 4) {
      return car.move();
    }
  }

  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
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
