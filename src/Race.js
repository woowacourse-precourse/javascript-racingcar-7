import ViewIn from './view/ViewIn.js';
import CarsInputParser from './utils/parser.js';

export default class Race {
  #cars;
  #count;

  init() {
    const inputCars = ViewIn.getCars();
    const parsedCars = CarsInputParser(inputCars);


  }

  start() {

  }
}