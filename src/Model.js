import Car from './Car.js';
import Validator from './Validator.js';

export default class Model {
  carList = [];

  makeCar(carNameString) {
    const carNameList = carNameString.split(',');
    Validator.isDuplicate(carNameList);

    carNameList.forEach((carName) => {
      Validator.exceedMaxLength(carName);
      this.carList.push(new Car(carName));
    });
    this.printCar();
  }

  printCar() {
    this.carList.forEach((car) => {
      console.log(car.getName(), car.getDistance());
    });
  }
}
