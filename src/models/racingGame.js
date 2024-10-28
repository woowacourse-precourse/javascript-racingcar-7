// 게임 전체 로직을 담당하는 객체

import Car from "./car.js";

class RacingGame {
  constructor(carNames, gameRounds) {
    this.cars = carNames.map((name) => new Car(name));
    this.gameRounds = gameRounds;
  }

  playOneRound() {
    this.cars.forEach((car) => car.tryToMove());
  }

  getCarsStatus() {
    return this.cars.map((car) => ({
      name: car.getName(),
      position: car.getPosition(),
    }));
  }

  findWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    return this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
  }

  isGameFinished() {
    // 예: 특정 조건에 따라 게임 종료 여부 결정
    return false; // 적절한 조건으로 변경 필요
  }
}

export default RacingGame;
