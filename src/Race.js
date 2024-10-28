import { Console } from '@woowacourse/mission-utils';

export class Race {
  constructor(cars, rounds) {
    this.cars = cars;
    this.rounds = rounds;
  }

  start() {
    for (let i = 0; i < this.rounds; i++) {
      this.runRound();
      this.printRoundResults();
    }
    this.printWinners();
  }

  runRound() {
    this.cars.forEach((car) => {
      const randomValue = Math.floor(Math.random() * 10);
      car.move(randomValue);
    });
  }

  printRoundResults() {
    this.cars.forEach((car) => {
      const result = `${car.name} : ${'-'.repeat(car.getPosition())}`;
      Console.print(result); 
    });
    Console.print(''); 
  }

  printWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winners = this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.name);
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}
