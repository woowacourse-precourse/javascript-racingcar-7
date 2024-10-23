class Car {
  #name;
  #distance = 0;

  constructor(name) {
    this.#name = name;
  }

  /**
   * 자동차를 움직이는 함수
   */
  move() {}

  get name() {
    return this.#name;
  }

  get distance() {
    return this.#distance;
  }
}

export default Car;
