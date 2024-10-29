//@ts-check
class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  /**@param {boolean} enabled  */
  move(enabled) {
    if (enabled) {
      this.position++;
    }
  }
}

export default Car;
