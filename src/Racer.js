class Racer {
  #name = '';

  #raceLine = '';

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getRaceLine() {
    return this.#raceLine;
  }

  getScore() {
    return this.#raceLine.length;
  }

  addScore() {
    this.#raceLine += '-';
  }
}

export default Racer;
