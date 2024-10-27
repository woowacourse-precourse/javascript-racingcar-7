import { ValidationError } from "../Error/ValidationError.js";
import { ERROR } from "../constants/index.js";

export function splitCarString(carString) {
  const cars = carString.split(',');
  if(cars.includes('')){
    throw new ValidationError(ERROR.EMPTY_PLAYER_MESSAGE);
  }
  return cars;
}

export function initRecord(carString) {
  const gameRecord = {};
  const cars = splitCarString(carString);
  cars.forEach((car) => {
    gameRecord[car] = 0;
  });
  return gameRecord;
}
