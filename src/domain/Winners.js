class Winners {
  static #SEPARATOR = ', ';

  static #NONE_MESSAGE = '모든 자동차가 전진하지 않았으며 우승자가 없습니다.';

  #max = 0;

  #winners = [];

  constructor(cars) {
    this.#findMaxNumber(cars);
    this.#findWinners(cars);
  }

  #findMaxNumber(cars) {
    this.#max = Math.max(...cars.values());
  }

  #findWinners(cars) {
    cars.forEach((numberOfMoves, carName) => {
      if (this.#max === numberOfMoves) {
        this.#winners.push(carName);
      }
    });
  }

  getWinners() {
    if (this.#max === 0) {
      return Winners.#NONE_MESSAGE;
    }

    return this.#winners.join(Winners.#SEPARATOR);
  }
}

export default Winners;
