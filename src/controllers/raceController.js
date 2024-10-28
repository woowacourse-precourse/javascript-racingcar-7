import raceRound from "./rounds/raceRound.js";
import resultRound from "./rounds/resultRound.js";

const raceController = (carList) => {
  carList.cars.forEach((car) => {
    raceRound(car);
  });
  resultRound(carList);
};

export default raceController;
