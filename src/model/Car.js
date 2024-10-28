// @ts-check

/**
 * @private {string} name
 * @private {stirng} moveCount
 */
class Car {
  #name;
  #moveCount;
  constructor(name) {
    this.#name = name;
    this.#moveCount = 0;
  }
  
  get name() {
    return this.#name;
  }

  getStatus() {
    return {name: this.#name, move: this.#moveCount};
  }

  move() {
    this.#moveCount++;
  }


}


export default Car;