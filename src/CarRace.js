import { Random } from "@woowacourse/mission-utils";

class CarRace {
  static startRace(carNames, attemptCount) {
    const raceResults = carNames.map((name) => ({ name, position: 0 }));

    for (let i = 0; i < attemptCount; i++) {
      raceResults.forEach((car) => {
        if (Random.pickNumberInRange(0, 9) >= 4) {
          car.position += 1;
        }
      });
    }
    return raceResults;
  }

  static printRaceStatus(raceResults) {
    raceResults.forEach((car) => {
      console.log(`${car.name} : ${"-".repeat(car.position)}`);
    });
    console.log("");
  }

  static printWinners(raceResults) {
    const maxPosition = Math.max(...raceResults.map((car) => car.position));
    const winners = raceResults
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
    console.log(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default CarRace;
