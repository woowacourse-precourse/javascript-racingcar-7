import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR_CAR_AMOUNT,ERROR_BLANK,ERROR_STRING_OVER_5,ERROR_DUPLICATE,ERROR_INVALID_MOVE_COUNT,ERROR_INVALID_INPUT_TYPE,throwError } from "../src/constants/errorContants.js";


class App {
  async run() {
    const cars = await inputCars();
    const moveCount = await inputMoveCount();
    startRace(cars, moveCount);
    checkWinner(cars);
  }
}

class Car {
  constructor(name) {
    this.name = name;
    this.distance = "";
  }
  moveForward() {
    this.distance += "-";
  }
}

async function inputCars() {
  const cars = String(
    await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    )
  )
    .split(",")
    .map((car) => car.trim());
  validateInput(cars);
  return cars.map((car) => new Car(car));
}
function validateInput(cars) {
  cars.forEach((car) => {
    validateBlank(car);
    validateOver5(car);
  });
  validateCarAmount(cars);
  validateDuplicate(cars);
}

function validateCarAmount(cars) {
  if (cars.length <= 1) throwError(ERROR_CAR_AMOUNT);
}

function validateBlank(car) {
  if (car == "") throwError(ERROR_BLANK);
}

function validateOver5(car) {
  if (car.length > 5) throwError(ERROR_STRING_OVER_5);
}

function validateDuplicate(cars) {
  if (cars.length !== new Set(cars).size) throwError(ERROR_DUPLICATE);
}
async function inputMoveCount() {
  const inputCount = String(
    await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
  );
  validateInputCount(inputCount);
  return Number(inputCount);
}
function validateInputCount(count) {
  if (count == "") throwError(ERROR_BLANK);
  if (isNaN(count)) throwError(ERROR_INVALID_INPUT_TYPE);
  if (count <= 0) throwError(ERROR_INVALID_MOVE_COUNT)
}

function startRace(cars, moveCount) {
  let curCount = 0;
  Console.print("\n실행 결과");
  while (curCount < moveCount) {
    moveCars(cars);
    printCurScore(cars);
    curCount++;
  }
}
function moveCars(cars) {
  cars.forEach((car) => moveCarByRandomValue(car));
}

function moveCarByRandomValue(car) {
  if (Random.pickNumberInRange(0, 9) >= 4) {
    car.moveForward();
  }
}
function printCurScore(cars) {
  cars.forEach((car) => {
    Console.print(`${car.name} : ${car.distance}`);
  });
  Console.print("");
}

function checkWinner(cars) {
  const maxScore = getMaxDistance(cars);
  const finalWinner = determineWinners(cars, maxScore);

  Console.print(`최종 우승자 : ${finalWinner.join(", ")}`);
}

function getMaxDistance(cars) {
  return cars.reduce(compareDistance, "");
}

function compareDistance(maxScore, car) {
  if (maxScore.length < car.distance.length) {
    return car.distance;
  }
  return maxScore;
}

function determineWinners(cars, maxScore) {
  return cars.filter((car) => car.distance === maxScore).map((car) => car.name);
}

export default App;
