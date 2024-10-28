import CarList from "../models/CarList.js";
import { Console } from "@woowacourse/mission-utils";
import InputValidator from "./InputValidator.js";

export const createCarList = (carNames) => {
  const carList = new CarList();
  const getCarList = carNames.split(",");
  InputValidator.isNameLength(getCarList);
  getCarList.forEach((name) => carList.addCar(name.trim()));

  return carList;
};
