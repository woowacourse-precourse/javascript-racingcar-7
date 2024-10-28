import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputCars = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const inputCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    let carsList = this.getCarList(inputCars);
    this.checkInputCount(inputCount);

    console.log("\n실행 결과")
    for (let i = 0; i < inputCount; i++) {
      this.tryRacing(carsList);
      console.log("\n");
    }

    this.printFinalResult(carsList);
  }

  checkInputCount(str) {
    const regExp = /^[0-9]*$/;
    if (!regExp.test(str)) {
      this.throwError("시도할 횟수에 숫자 외의 입력이 있습니다.");
    }
  }

  getCarList(str) {
    const cars = str.split(",");

    if (!cars.every((car) => car.length <= 5)) {
      this.throwError("자동차 이름은 5자 이하만 가능합니다.");
    }

    let carList = {};
    cars.forEach((car) => {
      carList[`${car}`] = 0;
    });

    return carList;
  }

  tryRacing(cars) {
    for (let key in cars) {
      let randomInteger = Random.pickNumberInRange(0, 9);
      if (randomInteger >= 4) {
        cars[key] += 1;
      }
    }

    this.printGameResult(cars);
  }

  printGameResult(cars) {
    for (const [key, value] of Object.entries(cars)) {
      console.log(`${key} : ${"-".repeat(value)}`);
    }
  }

  printFinalResult(cars) {
    let maxValue = 0;
    let winnerCars = [];
    Object.entries(cars).forEach(([key, value]) => {
      if (maxValue < value) {
        winnerCars = [];
        winnerCars.push(key);
        maxValue = value;
      } else if (maxValue == value) {
          winnerCars.push(key);
      }
    })
    console.log(`최종 우승자 : ${winnerCars.join(", ")}`);
  }

  throwError(message) {
    throw new Error(`[ERROR] ${message}`);
  }
}

export default App;
