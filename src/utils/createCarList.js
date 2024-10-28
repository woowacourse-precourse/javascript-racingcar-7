import CarList from "../models/CarList.js";

export const createCarList = (carNames) => {
  const carList = new CarList();
  const getCarList = carNames.split(",");
  getCarList.forEach((name) => carList.addCar(name.trim()));

  return carList;
};
