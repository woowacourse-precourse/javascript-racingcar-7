import { Console } from '@woowacourse/mission-utils';

class RacingCar {
  #cars;

  constructor() {
    this.#cars = new Map();
  }

  async receiveInput() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    input.split(',').forEach((car) => {
      car.trim();
      this.#cars.set(car, '');
    });
  }
}

export default RacingCar;
