import { Console, Random } from "@woowacourse/mission-utils";
import { validateCarInput, validateTimesInput } from "./validation";

class App {
  async run() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const CARS_INPUT = await Console.readLineAsync("");

    Console.print("시도할 횟수는 몇 회인가요?");
    const TIMES_INPUT = await Console.readLineAsync("");

    const CARS = validateCarInput(CARS_INPUT);
    const TIMES = validateTimesInput(TIMES_INPUT);
    this.StartPlayCarRacing(CARS, TIMES);
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
      maxDistanceLength = Math.max(maxDistanceLength, distanceLength);
      this.updateWinners(distanceLength, maxDistanceLength, winners, car);
    });
    return this.printWinners(winners);
  }

  updateWinners(distanceLength, maxDistanceLength, winners, car) {
    if (distanceLength >= maxDistanceLength) {
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
