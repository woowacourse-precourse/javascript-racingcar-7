import ViewIn from './view/ViewIn.js';
import { parseCars } from './utils/parser.js';
import { validateCars } from './utils/validator.js';

export default class Race {
  #cars;
  #count;

  init() {
    const cars = ViewIn.getCars();
    const carsArray = parseCars(cars);
    validateCars(carsArray);
  }

  start() {

  }
}