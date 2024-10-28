import {Console, Random} from "@woowacourse/mission-utils";

class App {
  async run() {
    // 자동차 이름 입력 및 검증
    const carNames = await this.getCarNames();
    
    // 자동차 이름 유효성 검사
    const validatedNames = this.validateCarNames(carNames);
    
    // 시도 횟수 입력 및 검증
    const attempts = await this.getAttempts();
    
    Console.print(`입력한 자동차 이름: ${validatedNames.join(', ')}`);
    Console.print(`시도할 횟수: ${attempts}`);

    // 자동차 객체 생성
    const cars = validatedNames.map(name => ({ name, position: 0 }));

    // 게임 진행
    for (let i = 0; i < attempts; i++) {
      this.moveCars(cars);
      this.printCars(cars);
    }

    // 우승자 출력
    const winners = this.determineWinners(cars);
    Console.print(`최종 우승자: ${winners.join(', ')}`);
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    return input;
  }

  validateCarNames(names) {
    const carNames = names.split(',').map(name => name.trim());
    for (const name of carNames) {
      if (name.length < 1 || name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 최소 1자 이상, 최대 5자 이하이어야 합니다.");
      }
    }
    return carNames;
  }

  async getAttempts() {
    const attempts = Number(await Console.readLineAsync("시도할 횟수는 몇 회인가요?"));
    if (!Number.isInteger(attempts) || attempts <= 0) {
      throw new Error("[ERROR] 시도 횟수는 0 이상의 정수여야 합니다.");
    }
    return attempts;
  }

  moveCars(cars) {
    cars.forEach((car) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        car.position += 1;
      }
    });
  }

  printCars(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
    Console.print(""); // 구분을 위한 빈 줄 추가
  }

  determineWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    return cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }
}

export default App;
