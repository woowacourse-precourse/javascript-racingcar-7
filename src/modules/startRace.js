import { Console } from "@woowacourse/mission-utils";
import getRandomDigit from "../utils/getRandomDigit";

function moveCarRandomly(car) {
  const randomDigit = getRandomDigit();

  if (randomDigit >= 4) {
    car.move();
  }
}

function viewProgressBar(car) {
  const carName = car.name;
  const progressBar = car.getProgressBar;

  Console.print(`${carName} : ${progressBar}`);
}

function getWinners(cars) {
  const maxDistance = Math.max(...cars.map((car) => car.distance));

  const winners = cars
    .filter((car) => car.position === maxDistance)
    .map((car) => car.name);

  return winners;
}
