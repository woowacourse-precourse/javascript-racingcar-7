import { Console, Random } from "@woowacourse/mission-utils";

function canForward(randomNum, carDistances, i) {
  if (randomNum >= 4) {
    carDistances[i] += 1;
  }
}

export function updateCarDistance(carDistances) {
  for (let i = 0; i < carDistances.length; i++) {
    let randomNum = Random.pickNumberInRange(0, 9);
    canForward(randomNum, carDistances, i);
  }
  return carDistances;
}
