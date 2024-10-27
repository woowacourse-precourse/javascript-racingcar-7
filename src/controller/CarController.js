import InputView from '../views/InputView';
import Car from '../models/Car';

class CarController {
  async init() {
    const carNames = await this.getCarNames();
    const cars = carNames.map((name) => new Car(name));
  }

  async getCarNames() {
    const carNames = await InputView.carNames();
    return carNames.split(',');
  }
}

export default CarController;
