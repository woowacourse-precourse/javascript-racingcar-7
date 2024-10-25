import { Console, Random } from "@woowacourse/mission-utils";

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
    if (car == "") {
      throw Error(["[ERROR] : 공백은 입력될 수 없습니다."]);
    }
    if (car.length > 5) {
      throw Error(["[ERROR] : 자동차 이름은 5자 이하만 가능합니다."]);
    }
  });
  if (isDuplicate(cars)) {
    throw Error(["[ERROR] : 중복된 이름은 입력할 수 없습니다."]);
  }
}

function isDuplicate(cars) {
  if (cars.length !== new Set(cars).size) {
    return true;
  }
  return false;
}
async function inputMoveCount() {
  const inputCount = String(
    await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
  );
  validateInputCount(inputCount);
  return Number(inputCount);
}
function validateInputCount(count) {
  if (count == "") {
    throw Error(["[ERROR] : 공백이 입력되었습니다."]);
  }
  if (isNaN(count)) {
    throw Error(["[ERROR] : 숫자를 입력해주세요."]);
  }
  if (count <= 0) {
    throw Error(["[ERROR] : 1 이상의 시도횟수를 입력해주세요."]);
  }
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
  let finalWinner = [];
  let maxScore = "";
  cars.forEach((car) => {
    if (maxScore.length < car.distance.length) {
      maxScore = car.distance;
    }
  });
  cars.forEach((car) => {
    if (car.distance == maxScore) {
      finalWinner.push(car.name);
    }
  });
  Console.print(`최종 우승자 : ${finalWinner.join(", ")}`);
}
export default App;
