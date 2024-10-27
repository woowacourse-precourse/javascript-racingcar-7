import { FORWARD_THRESHOLD } from '../constant/constants.js';

export default class Car {
  name;
  #position;

  constructor(name) {
    this.name = name;
    this.#position = 0;
  }

  get position() {
    return this.#position;
  }

  checkAndMoveForward(randomNumber){
    if(randomNumber >= FORWARD_THRESHOLD){
      this.#position += 1;
    }
  }
}