import InputView from "./InputView.js";
import Car from "./Car.js";
import InputValidation from "./validation.js";

class RacingManager {
  carList = [];

  async play() {
    const carNameList = await InputView.readCarNameList();
    InputValidation.validateCarNameList(carNameList);
    this.#setCarList(carNameList);
  }

  #setCarList(carNameList) {
    this.carList = carNameList.map((carName) => new Car(carName));
  }
}

export default RacingManager;
