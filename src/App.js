import { Console, Random } from '@woowacourse/mission-utils';

// 자동차의 상태와 행동을 관리하는 클래스
class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0; // 초기 위치는 0
  }

  // 전진 여부에 따라 위치 변경
  move(shouldMove) {
    if (shouldMove) {
      this.#position += 1;
    }
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}

class App {
  async run() {
    try {
      const carNames = await this.getCarNames();
      const attempts = await this.getAttempts();
      const cars = this.createCars(carNames);

      // Console.print('\n생성된 자동차들');
      // cars.forEach((car) => {
      //   Console.print(`${car.getName()} (초기 위치 : ${car.getPosition()})`);
      // });

      // 전진 기능 테스트
      // Console.print('\n전진 테스트');

      //   cars.forEach((car) => {
      //     car.move(true);
      //     Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
      //   });
      // } catch (error) {
      //   Console.print(error.message);
      // }

      Console.print('\n경주를 시작합니다.');

      for (let i = 0; i < attempts; i++) {
        Console.print(`\n${i + 1}회차 실행`);
        await this.playOneRound(cars);
      }
    } catch (error) {
      Console.print(error.message);
    }
  }

  // 자동차 객체 배열 생성
  createCars(names) {
    return names.map((name) => new Car(name));
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요 : '
    );
    const names = input.split(',').map((name) => name.trim());
    this.validateCarNames(names);
    return names;
  }

  validateCarNames(names) {
    if (names.some((name) => name.length === 0)) {
      throw new Error('[ERROR] 자동차 이름은 1자 이상이어야 합니다.');
    }
    if (names.some((name) => name.length > 5)) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }
  }

  async getAttempts() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요? ');
    const attempts = Number(input);
    this.validateAttempts(attempts);
    return attempts;
  }

  validateAttempts(attempts) {
    if (!Number.isInteger(attempts) || attempts <= 0) {
      throw new Error('[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.');
    }
  }

  async playOneRound(cars) {
    cars.forEach((car) => {
      const shouldMove = Random.pickNumberInRange(0, 9) >= 4;
      car.move(shouldMove);
    });
    await this.printRoundResult(cars);
  }

  async printRoundResult(cars) {
    cars.forEach((car) => {
      Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
    });
  }
}

export default App;
