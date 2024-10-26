import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  cars = [];

  async run() {
    try {
      await this.carNames();
      const attempt = await this.attempts();
      await this.startRace(attempt);
      this.announceWinner();
    }
    catch(error) {
      Console.print(`[ERROR] ${error.message}`);
    if (process.env.NODE_ENV === 'test') {
      throw new Error(`[ERROR] ${error.message}`);
    }
    return;
  }
  }
  
  async carNames() {
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    if (!input) {
      throw new Error("경주할 자동차 이름을 입력하세요.");
    }
    const names = input.split(',');
    this.cars = names.map(name => new Car(name));
  }

  async attempts() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const attempt = Number(input);
    if (isNaN(attempt) || attempt <= 0) {
      throw new Error("유효하지 않은 시도 횟수입니다.")
    }
    return attempt;
  }

  async startRace(attempt) {
    Console.print("\n실행 결과");
    for (let i = 0; i < attempt; i++) {
      this.moveCars();
      this.currentRace();
    }
  }

  moveCars() {
    this.cars.forEach(car => car.goAhead());
  }

  currentRace() {
    this.cars.forEach(car => {
      Console.print(`${car.name} : ${car.currentPosition()}`);
    });
    Console.print("\n");
  }

  announceWinner() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));
    const winners = this.cars
      .filter(car => car.position === maxPosition)
      .map(car => car.name)
      .join(', ');

    Console.print(`최종 우승자 : ${winners}`);
  }
}

export default App;
