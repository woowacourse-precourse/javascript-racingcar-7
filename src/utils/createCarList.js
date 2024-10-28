import CarList from "../models/CarList.js";
import Parser from "./Parser.js";
import { validateCarNames } from "./validateCarNames.js";

export const createCarList = (carNames) => {
  const carList = new CarList();
  const getCarList = Parser.splitSpring(carNames);
  validateCarNames(getCarList);
  getCarList.forEach((name) => carList.addCar(name.trim()));

  return carList;
};
