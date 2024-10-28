import { Console, Random } from "@woowacourse/mission-utils";

function canMove() {
  const randomValue = Random.pickNumberInRange(0, 9);
  return randomValue >= 4;
}

function updateCarPosition(results, index) {
  if (canMove()) {
    results[index] += "-";
  }
}

function move(results, cars) {
  cars.forEach((_, index) => {
    updateCarPosition(results, index);
  });
}

function printResults(cars, results) {
  results.forEach((result, index) => {
    Console.print(`${cars[index]} : ${result}`);
  });
  Console.print("");
}

export function race(cars, moveAttempts) {
  const results = cars.map(() => "");

  for (let i = 0; i < moveAttempts; i++) {
    move(results, cars);
    printResults(cars, results);
  }

  return results;
}
