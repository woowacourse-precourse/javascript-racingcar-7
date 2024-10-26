import { Console } from "@woowacourse/mission-utils";
import Car from "../model/Car";
import { ERROR_CAR_AMOUNT,ERROR_BLANK,ERROR_STRING_OVER_5,ERROR_DUPLICATE,throwError } from "../constants/errorContants.js";

export async function inputCars() {
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

