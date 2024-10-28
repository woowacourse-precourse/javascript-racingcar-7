import Rules from '../resources/Rules.js';
import Car from './Car.js';

class CarAllocator {
  static parseNames(names) {
    return names.split(Rules.DELIMITER);
  }

  static allocateCars(nameList) {
    return nameList.map((name) => new Car(name));
  }
}

export default CarAllocator;
