export default class Car {
  /**
   *
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
    this.position = 0;
  }
  moveForward() {
    this.position += 1;
  }
  getPosition() {
    return this.position;
  }
}
