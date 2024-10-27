import { Console } from "@woowacourse/mission-utils";
import { validateCars, validateRound } from "./Validator.js";

export async function getCars() {
  const carsInput = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );
  const cars = carsInput.split(",").map((car) => car.trim());
  validateCars(cars);

  return cars;
}

export async function getRound() {
  const roundInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
  validateRound(roundInput);

  return roundInput;
}
