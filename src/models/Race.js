class Race {
  #cars;
  #attempts;

  constructor(cars, attempts) {
    this.#cars = cars;
    this.#attempts = attempts;
  }

  // 정해진 횟수만큼 주행 시작
  start() {
    for (let i = 0; i < this.#attempts; i++) {
      this.#cars.forEach((car) => car.move());
    }
  }
}

export default Race;
