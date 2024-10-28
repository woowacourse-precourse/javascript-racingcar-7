/**
 *
 */
class Car {
  #name;
  #position;

  /**
   *
   */
  constructor(name) {
    this.setName(name);
    this.#position = 0;
  }

  /**
   *
   */
  setName(name) {
    this.#name = name;
  }
}

export default Car;
