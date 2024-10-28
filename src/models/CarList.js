import Car from './Car.js';

class CarList {
  constructor() {
    this.cars = [];
  }

  addCar(name) {
    this.cars.push(new Car(name));
  }
}

export default CarList;
