import { validateRacerAmount, validateRounds } from "./validate.js";

import Car from "../models/car.js";
import Race from "../models/Race.js";

export function initialRace(carsName, rounds) {
  validateRacerAmount(carsName.split(",").length);
  validateRounds(rounds);
  const cars = carsName.split(",").map((carName) => new Car(carName));
  return new Race(cars, rounds);
}
