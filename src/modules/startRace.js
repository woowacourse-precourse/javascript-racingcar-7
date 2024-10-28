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
