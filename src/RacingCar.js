import { Console, Random } from '@woowacourse/mission-utils';
import { INPUT, ERROR, REGEX } from './message';

class RacingCar {
  #cars;

  #status;

  #count;

  constructor() {
    this.#cars = [];
    this.#status = [];
  }

  static handleCarsInputException(input) {
    const SeparatorRegex = REGEX.separator;
    const nameRegex = REGEX.name;

    // 구분자 예외 검사
    if (!SeparatorRegex.test(input)) {
      throw new Error(ERROR.separator_must_comma);
    }

    // 자동차 이름 길이 검사
    const separateInput = input.split(',');

    separateInput.forEach((name) => {
      const trimmedName = name.trim();

      if (!nameRegex.test(trimmedName)) {
        throw new Error(ERROR.name_length_exceed_5);
      }
    });

    // 자동차 이름 중복 검사
    const uniqueNames = new Set(separateInput);
    if (uniqueNames.size !== separateInput.length) {
      throw new Error(ERROR.same_name);
    }
  }

  static handleCountInputException(input) {
    const regex = /^[1-9]\d*$/;
    if (!regex.test(input)) throw new Error(ERROR.only_positive_number);
  }

  async receiveInput() {
    const cars = await Console.readLineAsync(INPUT.cars);
    RacingCar.handleCarsInputException(cars);
    cars.split(',').forEach((car) => {
      this.#cars.push(car.trim());
      this.#status.push('');
    });

    const count = await Console.readLineAsync(INPUT.count);
    RacingCar.handleCountInputException(count);
    this.#count = count;
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

  playRace() {
    Console.print('');
    Console.print('실행 결과');

    while (this.#count > 0) {
      this.moveForward();
      this.#count -= 1;
    }
  }

  printWinner() {
    let winner = [];
    let maxStatus = 0;

    this.#cars.forEach((car, index) => {
      const statusLength = this.#status[index].length;

      if (statusLength > maxStatus) {
        winner = [car];
        maxStatus = statusLength;
      } else if (statusLength === maxStatus) {
        winner.push(car);
      }
    });

    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }
}

export default RacingCar;
