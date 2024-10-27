import OutputView from './OutputView.js';
import Car from './Car.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Game {
  constructor(carNames) {
    this.cars = carNames.map((name) => new Car(name));
    this.maxPosition = 0;
    this.winners = [];
  }

  start(rounds) {
    for (let i = 0; i < rounds; i++) {
      this.cars.forEach((car) => {
        const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomValue >= 4) {
          car.move();
          this.updateWinners(car); // 우승자 리스트 갱신
        }
      });
      OutputView.printPositions(this.cars);
    }
  }

  updateWinners(car) {
    if (car.getPosition() > this.maxPosition) {
      this.maxPosition = car.getPosition();
      this.winners = [car.getName()]; // 최고 위치가 변경되면 새 우승자 목록 초기화
    } else if (car.getPosition() === this.maxPosition) {
      this.winners.push(car.getName()); // 기존 최고 위치와 같다면 공동 우승자 추가
    }
  }

  getWinners() {
    return this.winners;
  }
}

export default Game;
