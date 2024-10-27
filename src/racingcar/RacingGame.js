import PlayingCar from './PlayingCar';
import OutputHandler from '../utils/OutputHandler';

// 자동차 이동과 경주 결과 출력

class RacingGame {
  constructor(carNames) {
    this.cars = carNames.map((name) => new PlayingCar(name)); // 자동차 객체 배열 초기화
  }

  start(attempts) { // attempts 만큼 반복하여 자동차 이동
    for (let i = 0; i < attempts; i += 1) {
      this.cars.forEach((car) => car.move());
      OutputHandler.printRaceStatus(this.cars);
    }
    this.printWinners();
  }

  printWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition())); // 최대 위치를 계산
    const winners = this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());

    OutputHandler.printWinners(winners);
  }
}

export default RacingGame;
