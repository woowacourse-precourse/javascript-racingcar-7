import Car from '../models/Car.js';

class CarFactory {
  static createCars(names) {
    return names.map((name) => new Car(name));
  }
}

export default CarFactory;
