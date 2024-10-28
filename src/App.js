import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  cars = [];
  distances = [];
  winner = [];

  async run() {
    const carsInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분)\n"
    );
    if (carsInput === "") {
      throw new Error("[ERROR] 자동차 이름을 입력해주세요.");
    }
    this.cars = carsInput.split(",");
    this.checkCarValidation();

    const rounds = await Console.readLineAsync("시도할 회수는 몇 회인가요?\n");
    this.checkRoundValidation(rounds);

    this.distances = Array(this.cars.length).fill(0);

    Console.print("\n실행 결과");
    for (let i = 0; i < rounds; i++) {
      this.racing();
      Console.print("\n");
    }

    this.findWinner();

    Console.print(`최종 우승자 : ${this.winner.join(", ")}`);
  }

  racing() {
    for (let i = 0; i < this.cars.length; i++) {
      const distance = MissionUtils.Random.pickNumberInRange(0, 9);
      if (distance >= 4) {
        this.distances[i]++;
      }

      Console.print(`${this.cars[i]} : ${"-".repeat(this.distances[i])}`);
    }
  }

  findWinner() {
    const maxDistance = Math.max(...this.distances);

    for (let car of this.cars) {
      if (this.distances[this.cars.indexOf(car)] === maxDistance) {
        this.winner.push(car);
      }
    }
  }

  checkCarValidation() {
    if (this.cars.length < 2) {
      throw new Error("[ERROR] 자동차는 2대 이상이어야 합니다.");
    } else {
      this.cars.forEach((car) => {
        if (car.length > 5) {
          throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
        } else if (car.trim() === "") {
          throw new Error("[ERROR] 자동차 이름은 공백이 아니어야 합니다.");
        }
      });

      if (new Set(this.cars).size !== this.cars.length) {
        throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
      }
    }
  }

  checkRoundValidation(rounds) {
    const roundParse = parseInt(rounds);
    if (isNaN(roundParse)) {
      throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
    } else if (roundParse < 1) {
      throw new Error("[ERROR] 시도 횟수는 1 이상이어야 합니다.");
    } else if (roundParse % 1 !== 0) {
      throw new Error("[ERROR] 시도 횟수는 정수여야 합니다.");
    }
  }
}

export default App;
