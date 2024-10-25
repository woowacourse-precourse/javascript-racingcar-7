class Car {
  #position;
  #name;

  constructor(name) {
    this.#name = name;
    this.#position = "";
  }

  async getAttemptResult() {
    const positionDash = `${this.#name} : ${this.#position}`;

    return positionDash;
  }

  async getPosition() {
    return {
      name: this.#name,
      position: this.#position.length,
    };
  }

  async progress() {
    this.#position += "-";
  }
}

export default Car;
