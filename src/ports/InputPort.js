import ERROR from '../constants/Error.js';

export default class InputPort {
  static async readCarsName () {
    throw new Error(ERROR.IMPLEMENTED);
  }

  static async readTargetRound () {
    throw new Error(ERROR.IMPLEMENTED);
  }
}
