import { Console, Random } from "@woowacourse/mission-utils";

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

export function startRacing(roundCount, carDistances, carCount) {
  for (let round = 0; round < roundCount; round++) {
    carDistances = updateCarDistance(carDistances, carCount);
    // Console.print(`${carDistances}`);
  }
  return carDistances;
}
