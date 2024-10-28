import { DELEMETER } from './constants.js';

/**
 *
 */
class StringParser {
  /**
   *
   */
  constructor() {
    this.delemeter = DELEMETER;
  }

  /**
   *
   */
  parseString(cars) {
    return cars.split(this.delemeter);
  }
}

export default StringParser;
