import { Console, Random } from '@woowacourse/mission-utils';

class RacingCar {
  #cars;

  #status;

  #count;

  constructor() {
    this.#cars = [];
    this.#status = [];
  }

  printForward() {
    this.#cars.forEach((car, index) => {
      Console.print(`${car} : ${this.#status[index]}`);
    });
    Console.print('');
  }

  moveForward() {
    this.#cars.forEach((car, index) => {
      const number = Random.pickNumberInRange(0, 9);
      if (number >= 4) this.#status[index] += '-';
    });

    this.printForward();
  }

  async receiveInput() {
    const cars = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const count = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    cars.split(',').forEach((car) => {
      this.#cars.push(car.trim());
      this.#status.push('');
    });

    this.#count = count;
  }
}

export default RacingCar;
