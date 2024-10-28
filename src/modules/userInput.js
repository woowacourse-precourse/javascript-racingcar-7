import { Console } from "@woowacourse/mission-utils";
import { carNameArrayValidate } from "./inputValidator";
import Car from "../models/car";

export async function getValidatedCars() {
  const carNameInput = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );

  const carNameArray = carNameInput.split(",");

  carNameArrayValidate(carNameArray);

  const cars = carNameArray.map((name) => new Car(name));

  return cars;
}
