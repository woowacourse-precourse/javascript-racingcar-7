import raceController from "./raceController.js";
import gameResultController from "./gameResultController.js";

const gameController = (carList, parseTryNumber) => {
  for (let i = 0; i < parseTryNumber; i++) {
    raceController(carList);
  }
  gameResultController(carList);
};

export default gameController;
