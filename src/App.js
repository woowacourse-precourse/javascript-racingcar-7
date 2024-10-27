import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputCarNames = await Console.readLineAsync(
      "경주할 자동차 이름(이름은 쉽표(,) 기준으로 구분)\n"
    );

    if (inputCarNames === "") {
      throw new Error("[ERROR]: 빈 문자열은 입력할 수 없습니다.");
    }

    const carNames = inputCarNames.split(",");

    const raceCars = [];

    carNames.forEach((carName) => {
      if (raceCars.some((car) => car.Name === carName)) {
        throw new Error("[ERROR]: 같은 이름은 불가능합니다.");
      }
      if (carName.length > 5) {
        throw new Error("[ERROR]: 이름은 5자 이하만 가능합니다.");
      }
      raceCars.push({ name: carName, location: "" });
    });

    const inputNum = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    if (isNaN(inputNum)) {
      throw new Error("[ERROR]: 숫자만 입력가능합니다.");
    }
    if (inputNum == 0) {
      throw new Error("[ERROR]: 0은 입력할 수 없습니다.");
    }

    Console.print("\n실행 결과");

    for (let i = 0; i < inputNum; i++) {
      this.race(raceCars);
      this.printRoundResult(raceCars);
    }

    this.printFinalResult(raceCars);
  }

  race(raceCars) {
    raceCars.forEach((raceCar) => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        raceCar.location += "-";
      }
    });
  }

  printRoundResult(raceCars) {
    raceCars.forEach((raceCar) => {
      Console.print(raceCar.name + " : " + raceCar.location);
    });
    Console.print("");
  }

  printFinalResult(raceCars) {
    const maxLength = Math.max(
      ...raceCars.map((raceCar) => raceCar.location.length)
    );

    const longestRaceCars = raceCars.filter(
      (raceCar) => raceCar.location.length === maxLength
    );

    const winners = longestRaceCars.map((raceCar) => raceCar.name).join(", ");

    Console.print("최종 우승자 : " + winners);
  }
}

export default App;
