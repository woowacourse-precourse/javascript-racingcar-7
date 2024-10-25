class Car {
  name = '';

  /**
   * @param {string} name
   */
  constructor(name) {
    this.setName(name);
  }

  /**
   * @param {string} name
   * @returns {Car}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * @returns {string}
   */
  getName() {
    return this.name;
  }
}

export default Car;
