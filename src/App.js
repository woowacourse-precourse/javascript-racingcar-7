import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  cars = [];
  distances = [];
  winner = [];

  async run() {
    const carsInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분)\n"
    );
    const rounds = await Console.readLineAsync("시도할 회수는 몇 회인가요?\n");

    this.cars = carsInput.split(",");
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
}

export default App;
