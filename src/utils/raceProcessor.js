import { Console, Random } from "@woowacourse/mission-utils";
function moveCar(results, carNames) {
  carNames.forEach((_, index) => {
    const randomValue = Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) {
      results[index] += "-";
    }
  });
}

export function race(carNames, moveAttempts) {
  const results = carNames.map(() => "");

  for (let i = 0; i < moveAttempts; i++) {
    moveCar(results, carNames);

    results.forEach((result, index) => {
      Console.print(`${carNames[index]} : ${result}`);
    });
    Console.print("");
  }

  return results;
}
