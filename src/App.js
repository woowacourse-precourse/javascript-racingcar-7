import { Console, Random } from "@woowacourse/mission-utils";
class App {
  async run() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const CARS_INPUT = await Console.readLineAsync("");

    Console.print("시도할 횟수는 몇 회인가요?");
    const TIMES_INPUT = await Console.readLineAsync("");

    const CARS = this.validateCarInput(CARS_INPUT);
    const TIMES = this.validateTimesInput(TIMES_INPUT);
    this.StartPlayCarRacing(CARS, TIMES);
  }

  validateCarInput(input) {
    let cars = input.split(",");
    if (input.indexOf(",") == -1 || input == "") {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }
    cars.forEach(this.validateCarNameLength);
    const uniqueCars = new Set(cars);
    if (uniqueCars.size !== cars.length) {
      throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
    }
    return cars.map((car) => ({ name: car, distance: "" }));
  }

  validateCarNameLength(car) {
    if (car.length > 5) {
      throw new Error("[ERROR] 각 자동차 이름은 5자를 초과할 수 없습니다.");
    }
  }

  validateTimesInput(input) {
    let times = Number(input);
    if (isNaN(times) || times <= 0 || !Number.isInteger(times)) {
      throw new Error("[ERROR] 시도 횟수는 양의 정수여야 합니다.");
    }
    return times;
  }

  StartPlayCarRacing(cars, times) {
    Console.print("");
    Console.print("실행 결과");
    while (times > 0) {
      this.movingForward(cars);
      times--;
    }
    return this.findWinners(cars);
  }

  movingForward(cars) {
    for (let i = 0; i < cars.length; i++) {
      let randomNumber = Random.pickNumberInRange(0, 9);
      this.getDistance(randomNumber, cars, i);
    }
    this.printProgress(cars);
    Console.print("");
  }

  getDistance(randomNumber, cars, i) {
    if (randomNumber >= 4) {
      cars[i].distance += "-";
    }
  }

  printProgress(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${car.distance} `);
    });
  }

  findWinners(cars) {
    let maxDistanceLength = 0;
    let winners = [];
    cars.forEach((car) => {
      let distanceLength = car.distance.length;
      this.updateWinners(distanceLength, maxDistanceLength, winners, car);
      maxDistanceLength = Math.max(maxDistanceLength, distanceLength);
    });
    return this.printWinners(winners);
  }

  updateWinners(distanceLength, maxDistanceLength, winners, car) {
    if (distanceLength >= maxDistanceLength) {
      winners.push(car.name);
    } else if (distanceLength === maxDistanceLength) {
      winners.push(car.name);
    }
  }

  printWinners(winners) {
    if (winners.length <= 1) {
      Console.print(`최종 우승자 : ${winners[0]}`);
    } else {
      Console.print(`최종 우승자 : ${winners.join(", ")}`);
    }
  }
}

export default App;
