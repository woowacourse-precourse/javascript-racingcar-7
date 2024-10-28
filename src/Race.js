import { Console, Random } from '@woowacourse/mission-utils';

class Race {
  static MOVEABLE_NUMBER = 4;

  static runRaceRounds(cars, attemptCount) {
    Console.print('\n실행 결과');
    for (let i = 0; i < attemptCount; i += 1) {
      this.moveCar(cars);
      this.printCarProgress(cars);
    }
  }

  static printCarProgress(cars) {
    cars.forEach(car => Console.print(`${car.name} : ${'-'.repeat(car.move)}`));
    Console.print('');
  }

  static moveCar(cars) {
    cars.forEach(car => car.attemptMove(this.isCarMovable()));
  }

  static isCarMovable() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber >= this.MOVEABLE_NUMBER;
  }

  static getRaceWinner(cars) {
    const maxMove = Math.max(...cars.map(car => car.move));
    return cars.filter(car => car.move === maxMove);
  }
}

export default Race;
