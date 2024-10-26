import { moveRandomValueBiggerThanFour } from "./moveRandomValueBiggerThanFour.js";

export function moveForwardEachCar(cars) {
  cars.forEach((car) => {
    moveRandomValueBiggerThanFour(car);
  });
}
