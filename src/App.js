import { Console, MissionUtils } from "@woowacourse/mission-utils";

function validateCarsInput(carsInput) {
  if (carsInput.length === 0) {
    throw new Error("[ERROR] 자동차를 1개 이상 입력하세요");
  }
  const clearedInput = carsInput.split(",").map((car) => car.trim());
  clearedInput.forEach(validateCarName);
}

function validateCarName(car) {
  if (!(car.length > 0 && car.length <= 5)) {
    throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다");
  }
}

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

function randomAdvanceCars(cars, count) {
  const result = new Array(cars.length).fill(0);
  for (let round = 0; round < count; round++) {
    generateRandomAdvance(cars, result);
    printCurrentStatus(cars, result);
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
