import { Console } from '@woowacourse/mission-utils';

class Race {
  constructor(cars, rounds) {
    this.cars = cars;
    this.rounds = rounds;
  }

  start() {
    for (let i = 0; i < this.rounds; i++) {
      this.playRound();
      Console.print('');
    }
    this.printWinners();
  }

  playRound() {
    this.cars.forEach((car) => {
      car.move();
      car.printPosition();
    });
  }

  printWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    const winners = this.cars.filter((car) => car.position === maxPosition).map((car) => car.name);
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default Race;
