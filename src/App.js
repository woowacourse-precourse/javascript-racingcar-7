import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const cars = await this.readCarNames();
      const attempts = await this.readAttempts();
      const raceResults = this.startRace(cars, attempts);
      this.printRaceResults(raceResults);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async readCarNames() {
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const cars = input.split(",").map((name) => name.trim());

    // 이름이 1자 이상 5자 이하인지 확인
    cars.forEach((name) => {
      if (name.length > 5 || name === "") {
        throw new Error("[ERROR] 자동차 이름은 1자 이상, 5자 이하로 입력해야 합니다.");
      }
    });

    return cars.map((name) => ({ name, position: 0 }));
  }

  async readAttempts() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const attempts = parseInt(input, 10);

    // 입력된 값이 1 이상의 숫자인지 확인
    if (isNaN(attempts) || attempts <= 0) {
      throw new Error("[ERROR] 시도 횟수는 숫자로 입력해야 하며, 1 이상이어야 합니다.");
    }

    return attempts;
  }

  startRace(cars, attempts) {
    for (let i = 0; i < attempts; i++) {
      cars.forEach((car) => {
        // 0에서 9 사이의 무작위 값이 4 이상일 때 전진
        if (Random.pickNumberInRange(0, 9) >= 4) {
          car.position += 1;
        }
      });
      this.printCurrentStatus(cars);
    }

    return cars;
  }

  printCurrentStatus(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
    Console.print(""); // 출력 형식 유지를 위한 공백 줄 추가
  }

  printRaceResults(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars.filter((car) => car.position === maxPosition).map((car) => car.name);
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
