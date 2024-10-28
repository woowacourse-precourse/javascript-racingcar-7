import { Console } from "@woowacourse/mission-utils";
import getRandomDigit from "../utils/getRandomDigit.js";

function moveCarRandomly(car) {
  const randomDigit = getRandomDigit();

  if (randomDigit >= 4) {
    car.move();
  }
}

function viewProgressBar(car) {
  const carName = car.name;
  const progressBar = car.getProgressBar();

  Console.print(`${carName} : ${progressBar}`);
}

function getWinners(cars) {
  const maxDistance = Math.max(...cars.map((car) => car.distance));

  const winners = cars
    .filter((car) => car.position === maxDistance)
    .map((car) => car.name);

  return winners;
}

export default function startRace(cars, count) {
  Console.print("\n실행 결과");

  for (let cycle = 0; cycle < count; cycle++) {
    cars.forEach((car) => {
      moveCarRandomly(car);
      viewProgressBar(car);
    });

    Console.print("");
  }

  const winners = getWinners(cars);

  Console.print(`최종 우승자 : ${winners.join(", ")}`);
}
