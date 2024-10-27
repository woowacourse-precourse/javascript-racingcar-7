import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const CARS_INPUT = await MissionUtils.Console.readLineAsync("경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n");
    const TRY_INPUT = await MissionUtils.Console.readLineAsync("시도할 횟수\n");
    const carList = CARS_INPUT.split(',').reduce((acc, car) => {
      acc[car.trim()] = 0;
      return acc;
    }, {});

    MissionUtils.Console.print('\n실행 결과\n');

    for (let i = 0; i < TRY_INPUT; i++) {
      for (const car in carList) {
        let advanceChance = MissionUtils.Random.pickNumberInRange(0, 9);
        if (advanceChance >= 4) {
          carList[car] += 1;
        }
        MissionUtils.Console.print(`${car} : ${'-'.repeat(carList[car])}`);
      }
      MissionUtils.Console.print('\n');
    }

  }
}

export default App;
