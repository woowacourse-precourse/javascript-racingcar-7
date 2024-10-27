import Car from '../Model/Car.js';

class CarManagementService {
  #cars;

  constructor() {
    this.#cars = [];
  }

  addCar(carName) {
    const car = new Car(carName);
    this.#cars.push(car);
  }

  getCars() {
    return this.#cars;
  }
}

export default CarManagementService;
