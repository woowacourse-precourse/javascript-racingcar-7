import { Console, Random } from "@woowacourse/mission-utils";

class App {
  Exception(condition, message) {
    if (condition) throw new Error(message);
  }

  async getNames() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const namesInput = await Console.readLineAsync("");
    this.Exception(namesInput === "", "[ERROR]");
    return namesInput;
  }

  async getRounds() {
    Console.print("시도할 횟수는 몇 회인가요?");
    const roundsInput = await Console.readLineAsync("");

    const rounds = parseInt(roundsInput, 10);
    this.Exception(!Number.isInteger(rounds) || rounds <= 0, "[ERROR]");
    return rounds;
  }

  createCars(namesInput) {
    const names = namesInput.split(",").map((name) => name.trim());
    const uniqueNames = new Set(names);
    this.Exception(uniqueNames.size !== names.length, "[ERROR]");

    return names.map((name) => {
      this.Exception(name.length > 5, "[ERROR]");
      return { name, distance: 0 };
    });
  }

  playRound(cars) {
    cars.forEach((car) => {
      if (Random.pickNumberInRange(0, 9) >= 4) car.distance++;
      Console.print(`${car.name} : ${"-".repeat(car.distance)}`);
    });
    Console.print("");
  }
}
