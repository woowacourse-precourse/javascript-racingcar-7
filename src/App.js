import { Console, MissionUtils } from "@woowacourse/mission-utils";

function validateCarsInput(carsInput) {
  if (carsInput.length === 0)
    throw new Error("[ERROR] 자동차를 1개 이상 입력하세요");
  const clearedInput = carsInput.split(",").map((car) => car.trim());
  for (let i = 0; i < clearedInput.length; i++) {
    if (!(clearedInput[i].length > 0 && clearedInput[i].length <= 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다");
    }
  }
}

function printCarAdvance(advanceValue) {
  return "-".repeat(advanceValue);
}

function randomAdvanceCars(cars, count) {
  const n = cars.length;
  const result = new Array(n).fill(0);

  for (let round = 0; round < count; round++) {
    const random_result = [];
    for (let i = 0; i < n; i++) {
      random_result[i] = MissionUtils.Random.pickNumberInRange(0, 9);
      if (random_result[i] >= 4) {
        result[i] += 1;
      }
    }

    for (let i = 0; i < n; i++) {
      Console.print(`${cars[i]} : ${printCarAdvance(result[i])}`);
    }
    Console.print("");
  }
  return result;
}

function checkWinner(cars, result) {
  const maxResult = Math.max(...result);
  const winners = cars.filter((car, index) => result[index] === maxResult);
  Console.print(`최종 우승자 : ${winners.join(", ")}`);
}

class App {
  async run() {
    let cars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    validateCarsInput(cars);
    cars = cars.split(",").map((car) => car.trim());

    const count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    Console.print(`\n실행 결과`);
    const result = randomAdvanceCars(cars, count);
    checkWinner(cars, result);
  }
}

export default App;
