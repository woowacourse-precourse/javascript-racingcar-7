import { Console } from '@woowacourse/mission-utils';

class RacingCar {
  static instance = null;
  #turn;
  #cars;
  #maxLength;

  constructor(turn = null) {
    if (RacingCar.instance !== null) {
      return RacingCar.instance;
    }
    RacingCar.instance = this;
    this.#turn = turn;
    this.#cars = [];
    this.board = {};
    this.#maxLength = 0;
  }

  join(car) {
    this.#cars.push(car);
    this.board[car.name] = '';
  }

  start() {
    Console.print('실행결과');
    for (let t = 0; t < this.#turn; t++) {
      this.#cars.forEach((car) => {
        car.roll();
        Console.print(`${car.name} : ${this.board[car.name]}`);
        this.#maxLength = Math.max(this.#maxLength, this.board[car.name].length);
      });
      Console.print('');
    }
    this.#finish();
  }

  #finish() {
    const carNames = Object.keys(this.board);
    const winner = carNames.filter((car) => this.board[car].length === this.#maxLength);
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }
}

export default RacingCar;
