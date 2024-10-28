import { Console, Random } from "@woowacourse/mission-utils";

function canForward(randomNum, carDistances, i) {
  if (randomNum >= 4) {
    carDistances[i] += 1;
  }
}

export function updateCarDistance(carDistances) {
  carDistances.forEach((_, i) => {
    const randomNum = Random.pickNumberInRange(0, 9);
    canForward(randomNum, carDistances, i);
  });
  return carDistances;
}
