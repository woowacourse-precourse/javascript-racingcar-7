import ViewIn from './view/ViewIn.js';
import { parseCars } from './utils/parser.js';
import { validateCars } from './utils/validator/car.js';
import { validateCount } from './utils/validator/count.js';

export default class Race {
  #cars;
  #count;

  async init() {
    const cars = await ViewIn.getCars();
    const count = await ViewIn.getCount();

    const carsArray = parseCars(cars);

    validateCars(carsArray);
    validateCount(count);
  }
}