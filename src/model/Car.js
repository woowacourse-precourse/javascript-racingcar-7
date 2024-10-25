class Car {
  /** @type {number[]} */
  road = [];
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

  /**
   * @param {number} round
   * @returns {number}
   */
  getTrack(round) {
    return this.road[round];
  }

  /**
   * @param {number} track
   * @returns {Car}
   */
  addTrack(track) {
    this.road.push(track);
    return this;
  }
}

export default Car;
