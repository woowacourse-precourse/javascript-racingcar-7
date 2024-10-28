import { Console, MissionUtils } from "@woowacourse/mission-utils";

function printCarAdvance(advanceValue) {
  return "-".repeat(advanceValue);
}

function generateRandomAdvance(cars, result) {
  const n = cars.length;
  for (let i = 0; i < n; i++) {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) result[i] += 1;
  }
}

function printCurrentStatus(cars, result) {
  cars.forEach((car, index) => {
    Console.print(`${car} : ${printCarAdvance(result[index])}`);
  });
  Console.print("");
}

export function runRaceRounds(cars, count) {
  const result = new Array(cars.length).fill(0);
  for (let round = 0; round < count; round++) {
    generateRandomAdvance(cars, result);
    printCurrentStatus(cars, result);
  }
  return result;
}
