import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNamesInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = this.validateCarNames(carNamesInput);

    const raceRoundsInput = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    const raceRounds = this.validateRaceRounds(raceRoundsInput);

    this.startRace(carNames, raceRounds);
  }

  validateCarNames(input) {
    const carNames = input.split(",").map((name) => name.trim());
    if (carNames.some((name) => name.length === 0 || name.length > 5)) {
      throw new Error("[ERROR]");
    }
    return carNames;
  }

  validateRaceRounds(input) {
    const rounds = parseInt(input, 10);
    if (isNaN(rounds) || rounds <= 0) {
      throw new Error("[ERROR]");
    }
    return rounds;
  }

  startRace(carNames, raceRounds) {
    const raceResults = carNames.map((name) => ({ name, position: 0 }));
    MissionUtils.Console.print("\n실행 결과");
    for (let i = 0; i < raceRounds; i++) {
      this.raceRound(raceResults);
      this.printRaceStatus(raceResults);
      MissionUtils.Console.print("");
    }
    this.printWinners(raceResults);
  }

  raceRound(raceResults) {
    raceResults.forEach((car) => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        car.position += 1;
      }
    });
  }

  printRaceStatus(raceResults) {
    raceResults.forEach((car) => {
      console.log(`${car.name} : ${"-".repeat(car.position)}`);
    });
  }

  printWinners(raceResults) {
    const maxPosition = Math.max(...raceResults.map((car) => car.position));
    const winners = raceResults
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
