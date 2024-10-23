import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class RacingGame {
  constructor() {
    this.cars = [];
    this.winner;
  }

  doTry() {
    this.cars.forEach((car) => {
      car.tryMove();
      Console.print(`${car.name} : ${'-'.repeat(car.score)}`);
    });

    Console.print('\n');
  }

  play(nameString, tryInput) {
    const names = nameString.split(',');
    this.cars = names.map((name) => new Car(name));
    let tryCount = tryInput;

    Console.print('\n실행 결과');
    do {
      this.doTry();
    } while ((tryCount -= 1));

    return this.winner;
  }
}

export default RacingGame;
