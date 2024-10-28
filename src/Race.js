import { Console } from '@woowacourse/mission-utils';

class Race {
  constructor(cars, rounds) {
    this.cars = cars;
    this.rounds = rounds;
  }

  // 레이스 시작
  start() {
    for (let i = 0; i < this.rounds; i++) {
      this.playRound();
      Console.print('');  // 각 라운드마다 줄바꿈
    }
  }

  // 각 라운드에서 자동차 움직임 처리
  playRound() {
    this.cars.forEach((car) => {
      car.move();
      car.printPosition();
    });
  }
}

export default Race;
