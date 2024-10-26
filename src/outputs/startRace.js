import { Console, Random } from "@woowacourse/mission-utils";

export function startRace(cars, moveCount) {
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
