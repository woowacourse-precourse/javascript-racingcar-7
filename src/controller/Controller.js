import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import carNameSplit from "../utils/carNameSplit.js";
import Car from "../model/Car.js";

class Controller {
    #inputView;
    #outputView;
    #car

    constructor() {
        this.#inputView = new InputView();
        this.#outputView = new OutputView();
        this.#car = [];
    }

    settingCar(nameArray) {
      for (const carName of nameArray) {
        this.#car.push(new Car(carName));
      }
    }

    async playRacingCar() {
      const [carNameData, numberOfAttemptsData] = await this.#inputView.readInput();
      const carNameArray = carNameSplit(carNameData);

      this.settingCar(carNameArray);

      this.#outputView.printResult();
    }
}

export default Controller;