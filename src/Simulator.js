import pickRandomNumberInRange from './util/pickRandomNumberInRange';

class Simulator {
  constructor(names) {
    this.state = names.reduce((arr, name) => {
      arr.push({ [name]: 0 });
      return arr;
    }, []);
  }

  #canMoveForward() {
    if (pickRandomNumberInRange(0, 9) >= 4) return true;
    return false;
  }

  simulate() {
    this.state = this.state.map(({ name, count }) => {
      if (this.#canMoveForward()) count++;
      return { name, count };
    });
  }
}

export default Simulator;
