import { GameWinnerMessage } from "../view/ConsoleView.js";

const getWinner = (carList) => {
  const isArrayAdvance = carList.cars.map((car) => car.advance);
  const isMaxAdvance = Math.max(...isArrayAdvance);
  return carList.cars.filter((car) => car.advance === isMaxAdvance);
};

const setWinner = (winnerCars) => {
  return winnerCars.map((car) => car.name).join(", ");
};

const gameResultController = (carList) => {
  const winnerCars = getWinner(carList);
  const winnerNames = setWinner(winnerCars);
  GameWinnerMessage(winnerNames);
};

export default gameResultController;
