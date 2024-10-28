import raceController from "./raceController.js";
import gameResultController from "./gameResultController.js";

const gameController = (carList, parsedTryNumber) => {
  for (let i = 0; i < parsedTryNumber; i++) {
    raceController(carList);
  }
  gameResultController(carList);
};

export default gameController;
