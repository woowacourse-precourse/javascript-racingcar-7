import Car from '../models/Car.js';

class CarParser {
  static splitCar(input) {
    let cars = input.split(',');
    cars = cars.map(carName => new Car(carName));
    return cars;
  }
}

export default CarParser;
