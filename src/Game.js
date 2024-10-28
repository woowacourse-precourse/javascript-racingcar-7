class Game {
  #round;

  constructor() {
    this.cars = [];
    this.#round = 0;
  }

  start() {
    // 입력 받기
  }

  progress() {
    // 라운드 진행
  }

  end() {
    // 게임 종료
  }

  #getCardAdvances() {
    return this.cars.map((car) => car.forwardCount);
  }

  #getMaxForwardCount(carAdvances) {
    return Math.max(...carAdvances);
  }

  getWinners() {
    const carAdvances = this.#getCardAdvances();
    const maxForwardCount = this.#getMaxForwardCount(carAdvances);

    return this.cars.filter((car) => car.forwardCount === maxForwardCount).map((winner) => winner.name);
  }
}

export default Game;
