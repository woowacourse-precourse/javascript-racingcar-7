import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";
const regex = /^[A-Za-z]+(,[A-Za-z]+)*$/;

class App {
  constructor() {
    this.cars = [];
  }
  async run() {
    let inputNames, count;

    try {
      inputNames = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );

      this.validataNameInput(inputNames);

      count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

      this.validataCountInput(count);
    } catch (error) {
      Console.print(error.message);
      return Promise.reject(error);
    }

    const names = inputNames.split(",");

    this.cars = names.map((name) => new Car(name));

    Console.print("\n실행결과");
    for (let i = 0; i < count; i++) {
      this.cars.forEach((car) => {
        car.moveRandomDistance();
        car.getStatus();
      });
      Console.print("\n");
    }

    let winner = [this.cars[0]];
    for (let i = 1; i < this.cars.length; i++) {
      if (this.cars[i].movedDistance > winner[0].movedDistance) {
        winner = [this.cars[i]];
      } else if (this.cars[i].movedDistance === winner[0].movedDistance) {
        winner.push(this.cars[i]);
      }
    }

    const winnerName = winner.map((car) => car.name).join(", ");
    Console.print(`최종 우승자 : ${winnerName}`);
  }

  validataNameInput(names) {
    if (!regex.test(names)) {
      throw new Error("[ERROR] : 이름은 알파벳이어야 합니다.");
    }
    names.split(",").forEach((name) => {
      if (name.length > 5) throw new Error("[ERROR] : 이름은 5글자 이하만 가능합니다.");
    });
  }

  validataCountInput(count) {
    count = parseInt(count);
    if (isNaN(count) || count <= 0) {
      throw new Error("[ERROR] : 시도 횟수는 양의 정수여야 합니다.");
    }
  }
}

export default App;
