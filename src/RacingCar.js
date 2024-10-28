import { Console } from '@woowacourse/mission-utils';

class RacingCar {
  #cars;

  #status;

  #count;

  constructor() {
    this.#cars = [];
    this.#status = [];
  }

  async receiveInput() {
    const cars = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const count = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    cars.split(',').forEach((car) => {
      car.trim();
      this.#cars.push(car);
      this.#status.push('');
    });

    this.#count = count;
  }
}

export default RacingCar;
