import Car from "../model/Car.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import winnerDetermine from "../utils/winnerDetermine.js";

class Controller {
    #inputView;
    #outputView;
    car

    constructor() {
        this.#inputView = new InputView();
        this.#outputView = new OutputView();
        this.car = [];
    }

    settingCar(nameArray) {
      for (const carName of nameArray) {
        this.car.push(new Car(carName));
      }
    }

    moveCar() {
      for (let car of this.car) {
        car.move();
      }
    }

    async playRacingCar() {
      const [carNameArray, numberOfAttemptsData] = await this.#inputView.readInput();

      this.settingCar(carNameArray);

      this.#outputView.printResultPrefix();
      for (let attempts = 0; attempts < numberOfAttemptsData; attempts++) {
        this.moveCar();
        this.#outputView.printResult(this.car);
      }

      const winner = winnerDetermine(this.car);
      this.#outputView.printWinner(winner);
    }
}

export default Controller;