import { validateRacerAmount, validateRounds } from "./validate.js";
import Car from "../models/Car.js";
import Race from "../models/Race.js";
import { CAR_NAME_DELIMITER } from "./constants.js";

export function initialRace(carsName, rounds) {
  const parseCarsName = carsName.split(CAR_NAME_DELIMITER).filter((name) => name.trim());
  validateRacerAmount(parseCarsName.length);
  validateRounds(rounds);
  const cars = parseCarsName.map((carName) => new Car(carName));
  return new Race(cars, rounds);
}
