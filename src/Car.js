class Car {
  #name;

  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  move() {
    this.#distance += 1;
  }

  getCarInformation() {
    return { name: this.#name, distance: this.#distance };
  }

  parseDistanceToString() {
    const { name, distance } = this.getCarInformation();

    let stringDistnace = '';
    for (let i = 0; i < distance; i += 1) {
      stringDistnace += '-';
    }
    return `${name} : ${stringDistnace}`;
  }
}

export default Car;
