import { Console, Random } from '@woowacourse/mission-utils'

class Game {
  constructor(cars, rounds) {
    this.cars = cars;
    this.rounds = rounds;
  }

  start() {
    Console.print('\n실행 결과');

    for (let i = 0; i < this.rounds; i++) {
      this.moveCars();
      Console.print('\n');
    }

    return this.cars;
  }

  moveCars() {
    this.cars.forEach((move, name) => {
      const randomNumber = Random.pickNumberInRange(0, 9);

      if (randomNumber >= 4) {
        this.cars.set(name, move + 1);
      }

      Console.print(`${name} : ${'-'.repeat(this.cars.get(name))}`);
    })
  }
}

export default Game;