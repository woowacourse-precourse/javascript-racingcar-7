import InputView from '../views/InputView';
import Car from '../models/Car';
import AttemptCount from '../models/AttemptCount';

class CarController {
  async init() {
    const carNames = await this.getCarNames();
    const cars = carNames.map((name) => new Car(name));

    const inputCount = await this.getAttemptCount();
    const attemptCount = new AttemptCount(inputCount);
  }

  async getCarNames() {
    const carNames = await InputView.carNames();
    return carNames.split(',');
  }

  async getAttemptCount() {
    const attemptCount = await InputView.attemptCount();
    return attemptCount;
  }

}

export default CarController;
