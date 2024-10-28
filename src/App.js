import { Console } from '@woowacourse/mission-utils';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {

    const car = await this.Car();
    const tryCount = await this.TryCount();
      
    const carCount = new Array(car.length).fill(0);

    Console.print('\n실행 결과');
    this.startRace(car, carCount, tryCount);

    const winner = this.Winner(car, carCount);
    Console.print(`최종 우승자 : ${winner.join(", ")}`);
  }

  async Car() {
    Console.print('경주할 자동차 이름을 입력하세요.');
    const input = await Console.readLineAsync('');
    const car = input.split(",").map(name => name.trim());

    this.validCar(input, car);
    return car;
  }

  validCar(input, car) {
    // 이름 길이 검사
    if (car.some(e => e.length > 5)) {
      throw new Error("[ERROR] 이름은 5자 이하여야 합니다.");
    }
    // 이름 공백 검사
    if (car.some(e => e === "")) {
      throw new Error("[ERROR] 이름에 공백이 포함될 수 없습니다.");
    }
    // 쉼표로 시작/끝 검사
    if (input.startsWith(",") || input.endsWith(",")) {
      throw new Error("[ERROR] 이름이 쉼표로 시작하거나 끝날 수 없습니다.");
    }
    // 중복 검사
    if (new Set(car).size !== car.length) {
      throw new Error("[ERROR] 중복된 이름이 존재합니다.");
    }
  }

  async TryCount() {
    Console.print('시도할 횟수는 몇 회인가요?');
    const tryCount = await Console.readLineAsync('');

    this.validTryCount(tryCount);
    return parseInt(tryCount);
  }

  validTryCount(tryCount) {
    // 숫자 여부
    if (isNaN(tryCount) || parseInt(tryCount) != tryCount) {
      throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
    }
    // 1 이상 여부
    if (tryCount <= 0) {
      throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자로 입력해야 합니다.");
    }
  }

  startRace(car, carCount, tryCount) {
    for (let i = 0; i < tryCount; i++) {
      for (let j = 0; j < car.length; j++) {
        const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNum >= 4) {
          carCount[j]++;
        }
        Console.print(`${car[j]} : ${'-'.repeat(carCount[j])}`);
      }
      Console.print('\n');
    }
  }

  Winner(car, carCount) {
    const WinnerIndex = Math.max(...carCount);
    return car.filter((_, index) => carCount[index] === WinnerIndex);
  }
}

export default App;
