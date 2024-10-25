import { Console } from "@woowacourse/mission-utils";

const displayRaceResults = (car) => {
  Console.print(`${car.name} : ${"-".repeat(car.runCount)}`);
}

export default displayRaceResults;