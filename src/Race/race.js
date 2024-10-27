import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../Car/car.js';
import { gameWinnerComment } from '../Output/outPut.js';

class Race {
  constructor(car, round) {
    this.car = car.map((name) => new Car(name));
    this.round = round;
  }

  // 경주 시작
  async startRace() {
    for (let i = 0; i < this.round; i++) {
      this.runRound();
      this.viewPosition();
      MissionUtils.Console.print('\n');
    }
    this.gameWinner();
  }

  // 라운드에서 자동차의 이동 실행
  runRound() {
    this.car.forEach((car) => car.move());
  }

  // 모든 자동차의 현재 위치 출력
  viewPosition() {
    this.car.forEach((car) => MissionUtils.Console.print(car.viewPosition()));
  }

  //   gameWinner() {}
  gameWinner() {
    const maxPosition = Math.max(...this.car.map((car) => car.position));
    const winners = this.car
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);

    gameWinnerComment(winners.join(', '));
  }
}

export default Race;
