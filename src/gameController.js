import { Console, Random } from "@woowacourse/mission-utils";
import { printRacing } from "./printRacing.js";
import { printWinner } from "./printWinner.js";

function canForward(randomNum, carDistances, i) {
  if (randomNum >= 4) {
    carDistances[i] += 1;
  }
  return;
}

function updateCarDistance(carDistances, carCount) {
  for (let i = 0; i < carCount; i++) {
    const randomNum = Random.pickNumberInRange(0, 9);
    canForward(randomNum, carDistances, i);
  }
  return carDistances;
}

export function startRacing(roundCount, carDistances, carCount, carNames) {
  for (let round = 0; round < roundCount; round++) {
    carDistances = updateCarDistance(carDistances, carCount);
    // Console.print(`${carDistances}`);

    printRacing(carCount, carNames, carDistances);
  }
  printWinner(carDistances, carNames);
  return carDistances;
}
