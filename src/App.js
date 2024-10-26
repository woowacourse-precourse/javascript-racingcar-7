import { inputCars } from "./inputs/inputCars.js";
import { inputMoveCount } from "./inputs/inputMoveCount.js";

class App {
  async run() {
    const cars = await inputCars();
    const moveCount = await inputMoveCount();;
    startRace(cars, moveCount);
    checkWinner(cars);
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
