import ERROR from '../constants/Error.js';

export default class OutputPort {
  static displayRaceHeader () {
    throw new Error(ERROR.IMPLEMENTED);
  }
  static displayCarsState () {
    throw new Error(ERROR.IMPLEMENTED);
  }

  static displayWinners () {
    throw new Error(ERROR.IMPLEMENTED);
  }
}
