// 게임 전체 로직을 담당하는 객체

import Car from "./car.js";

const RacingGame = {
  cars: [],

  init(carNames) {
    this.cars = carNames.map((name) => Object.create(Car).init(name));
    return this;
  },

  playOneRound() {
    this.cars.forEach((car) => car.tryToMove());
  },

  getCarsStatus() {
    return this.cars.map((car) => ({
      name: car.getName(),
      position: car.getPosition(),
    }));
  },
};

export default RacingGame;
