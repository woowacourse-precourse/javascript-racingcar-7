import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carname = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const tryCount = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    MissionUtils.Console.print("\n실행 결과");

    class Car {
      constructor(name) {
        this.name = name;
        this.result = "";
      }
      go = () => {
        if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
          this.result += "-";
        }
      };
    }

    const removedWhitespace = carname.replace(/ /g, "");
    const cars = removedWhitespace.split(",");
    const carObjs = cars.map((name) => new Car(name));

    function printResult() {
      for (let i = 0; i < carObjs.length; i++) {
        carObjs[i].go();
        MissionUtils.Console.print(`${carObjs[i].name} : ${carObjs[i].result}`);
      }
    }

    for (let i = 0; i < Number(tryCount); i++) {
      printResult();
      MissionUtils.Console.print("");
    }

    let finalWinner = carObjs[0];
    const finalWinners = [];

    for (let i = 1; i < carObjs.length; i++) {
      if (carObjs[i].result.length > finalWinner.result.length) {
        finalWinner = carObjs[i];
        finalWinners.push(finalWinner.name);
      }
    }

    const exceptionFinalWinner = carObjs.filter(
      (car) => car.name !== finalWinner.name
    );

    for (let i = 0; i < exceptionFinalWinner.length; i++) {
      if (exceptionFinalWinner[i].result.length === finalWinner.result.length) {
        finalWinners.push(exceptionFinalWinner[i].name);
      }
    }

    if (carObjs[0] === finalWinner) {
      finalWinners.unshift(carObjs[0].name);
    }

    MissionUtils.Console.print(`최종 우승자 : ${finalWinners.join(", ")}`);
  }
}

export default App;
