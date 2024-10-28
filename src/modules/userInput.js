import { Console } from "@woowacourse/mission-utils";
import { carNameArrayValidate, countValidate } from "./inputValidator.js";
import Car from "../models/car.js";

export async function getValidatedCars() {
  const carNameInput = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );

  const carNameArray = carNameInput.split(",");

  carNameArrayValidate(carNameArray);

  const cars = carNameArray.map((name) => new Car(name));

  return cars;
}

export async function getValidatedCount() {
  const count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

  countValidate(count);

  return count;
}
