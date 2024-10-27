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
    const carNames = await this.getCarNames();
    const attempts = await this.getAttempts();
    const cars = this.createCars(carNames);

    Console.print('\n경주를 시작합니다.');
    for (let i = 0; i < attempts; i++) {
      await this.playOneRound(cars);
    }
    await this.announceWinners(cars);
  }

  // 자동차 객체 생성
  createCars(names) {
    return names.map((name) => new Car(name));
  }

  // 자동차 이름 입력 받기
  // 쉼표로 구분된 문자열을 입력받아 배열로 변환
  async getCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요 : '
    );
    const names = input.split(',').map((name) => name.trim());
    this.validateCarNames(names);
    return names;
  }

  // 빈 문자열 체크
  // 이름 길이 5자 초과 체크
  validateCarNames(names) {
    if (names.some((name) => name.length === 0)) {
      throw new Error('[ERROR] 자동차 이름은 1자 이상이어야 합니다.');
    }
    if (names.some((name) => name.length > 5)) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }
  }

  // 시도 횟수 입력 받기
  async getAttempts() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요? ');
    const attempts = Number(input);
    this.validateAttempts(attempts);
    return attempts;
  }

  // 1 이상의 정수인지 확인
  validateAttempts(attempts) {
    if (!Number.isInteger(attempts) || attempts <= 0) {
      throw new Error('[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.');
    }
  }

  // 각 자동차별로 이동 조건 확인 후 이동
  // 라운드 결과 출력
  async playOneRound(cars) {
    cars.forEach((car) => {
      const shouldMove = Random.pickNumberInRange(0, 9) >= 4;
      car.move(shouldMove);
    });
    await this.printRoundResult(cars);
  }

  // 라운드 결과 출력
  async printRoundResult(cars) {
    cars.forEach((car) => {
      Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
    });
  }

  // 우승자 찾기
  findWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.getPosition()));
    return cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
  }

  // 우승자 발표

  async announceWinners(cars) {
    const winners = this.findWinners(cars);
    await Console.print(`\n최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
