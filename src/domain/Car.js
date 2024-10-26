import { STATIC_NUMBER } from "../static/Static.js";

export default class Car {
    constructor(name) {
      this.name = name;
      this.position = 0;
    }
  
    move(randomNumber) {
      if (randomNumber >= STATIC_NUMBER.game.MOVE_THRESHOLD) {
        this.position += STATIC_NUMBER.game.MOVE_STEP;
      }
    }
  
    getPosition() {
      return this.position;
    }
  
    getName() {
      return this.name;
    }
  }