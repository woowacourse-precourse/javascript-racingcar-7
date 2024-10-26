import { Console, Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    this.position += 1;
  }
}

class App {
  async run() {
    try {
      // 자동차 이름 입력
      const inputCarList = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );

      // 자동차 이름 분리, 이름 공백 제거
      const carNames = inputCarList.split(',').map((name) => name.trim());

      this.validateCarNames(carNames);

      // 자동차 객체 생성
      const cars = carNames.map((name) => new Car(name));

      // 시도 횟수 입력
      const inputTryCount = await Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?\n'
      );

      // 시도 횟수 숫자로 변환, 유효성 검사
      const tryCount = Number(inputTryCount);
      this.validateTryCount(tryCount);

      // 경주 시작
      Console.print('\n실행 결과');
      //자동차 전진 기능
      this.moveCars(cars, tryCount);
    } catch (error) {
      throw error;
    }
  }

  // 클래스 메서드로 유효성 검사 정의
  validateCarNames(carNames) {
    if (carNames.length < 2) {
      throw new Error('[ERROR] 자동차는 2개 이상 입력해야 합니다.');
    }
    if (carNames.some((name) => name.length > 5)) {
      throw new Error(
        '[ERROR] 자동차 이름은 1글자 이상 5글자 이하로 입력해야 합니다.'
      );
    }
    if (new Set(carNames).size !== carNames.length) {
      throw new Error('[ERROR] 중복되는 자동차 이름은 입력할 수 없습니다.');
    }
  }

  validateTryCount(tryCount) {
    if (isNaN(tryCount) || tryCount <= 0 || !Number.isInteger(tryCount)) {
      throw new Error('[ERROR] 시도할 횟수는 양의 정수여야 합니다.');
    }
  }
  moveCars(cars, tryCount) {
    for (let i = 0; i < tryCount; i++) {
      this.moveEachcar(cars);
      this.printRoundStatus(cars);
    }
  }

  moveEachcar(cars) {
    for (const car of cars) {
      if (this.shouldMove()) {
        car.move();
      }
    }
  }

  // 랜덤 숫자가 4 이상이면 전진
  shouldMove() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber >= 4;
  }

  printRoundStatus(cars) {
    for (const car of cars) {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    }
    Console.print('');
  }
}

export default App;
