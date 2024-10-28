import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNameString = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    //TODO: validateName check
    const playNum = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    //TODO: isNum or validateNum check

    const racingCars = carNameString.split(",").map((carName) => {
      return { name: carName, score: 0 };
    });

    Console.print("\n실행 결과");
    for (let i = 0; i < playNum; i++) {
      racingCars.map((car) => {
        this.randomForward(car);
        this.printRacingcarInfo(car);
      });
      Console.print("\n");
    }

    Console.print(
      `최종 우승자 : ${this.whoiswinner(racingCars)
        .map((car) => car.name)
        .join(", ")}`
    );
  }

  randomForward(car) {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      car.score += 1;
    }
  }
}

export default App;
